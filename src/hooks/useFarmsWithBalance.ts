import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress, getBNBRewardChefAddress } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import bnbRewardChefABI from 'config/abi/bnbRewardChef.json'
import { farmsConfig } from 'config/constants'
import { FarmConfig, QuoteToken } from 'config/constants/types'
import useRefresh from './useRefresh'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const { account } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
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
      // const rawResults = await multicall(masterChefABI, calls)
      const results = farmsConfig.map((farm, index) => ({ ...farm, balance: new BigNumber(rawEarnings[index]) }))

      setFarmsWithBalances(results)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, fastRefresh])

  return farmsWithBalances
}

export default useFarmsWithBalance
