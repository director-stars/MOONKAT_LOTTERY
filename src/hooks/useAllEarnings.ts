import { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress, getBNBRewardChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import bnbRewardChefABI from 'config/abi/bnbRewardChef.json'
import { farmsConfig } from 'config/constants'
import { QuoteToken } from 'config/constants/types'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account }: { account: string } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      // const calls = farmsConfig.map((farm) => ({
      //   address: getMasterChefAddress(),
      //   name: 'pendingMkats',
      //   params: [farm.pid, account],
      // }))

      // const res = await multicall(masterChefABI, calls)
      const rawEarnings = await Promise.all(
        farmsConfig.map(async (farm) => {
          let call
          let abi
          if (farm.tokenSymbol === QuoteToken.BNB) {
            abi = bnbRewardChefABI
            call = {
              address: getBNBRewardChefAddress(),
              name: 'pendingReward',
              params: [account],
            }
          } else {
            abi = masterChefABI
            call = {
              address: getMasterChefAddress(),
              name: 'pendingMkats',
              params: [farm.pid, account],
            }
          }
          const rawEarning = (await multicall(abi, [call]))[0]
      
          return rawEarning
        })
      )

      setBalance(rawEarnings)
    }

    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh])

  return balances
}

export default useAllEarnings
