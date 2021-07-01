import { useCallback, useState, useEffect } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { useLottery, useLotteryForMkat, useLotteryTicket, useLotteryTicketForMkat } from 'hooks/useContract'
import useRefresh from './useRefresh'
import {
  getTotalRewards,
  getTotalClaim,
  getMatchingRewardLength,
  getMatchingRewardLengthForMkat,
  getWinningNumbers,
  getTickets,
  getAllocation,
} from '../utils/lotteryUtils'

const useTickets = (lotteryNumber = null) => {
  const [tickets, setTickets] = useState([])
  const { account } = useWallet()
  const ticketsContract = useLotteryTicket()
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTickets(lotteryContract, ticketsContract, account, lotteryNumber)
      setTickets(res)
    }

    if (account && lotteryContract && ticketsContract) {
      fetchBalance()
    }
  }, [account, lotteryContract, ticketsContract, fastRefresh, lotteryNumber])

  return tickets
}

export const useTicketsForMkat = (lotteryNumber = null) => {
  const [tickets, setTickets] = useState([])
  const { account } = useWallet()
  const ticketsContract = useLotteryTicketForMkat()
  const lotteryContract = useLotteryForMkat()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTickets(lotteryContract, ticketsContract, account, lotteryNumber)
      setTickets(res)
    }

    if (account && lotteryContract && ticketsContract) {
      fetchBalance()
    }
  }, [account, lotteryContract, ticketsContract, fastRefresh, lotteryNumber])

  return tickets
}

export const useTotalRewards = () => {
  const [rewards, setRewards] = useState(new BigNumber(0))
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTotalRewards(lotteryContract)
      setRewards(new BigNumber(res))
    }

    if (lotteryContract) {
      fetchBalance()
    }
  }, [lotteryContract, fastRefresh])

  return rewards
}

export const useTotalRewardsForMkat = () => {
  const [rewards, setRewards] = useState(new BigNumber(0))
  const lotteryContract = useLotteryForMkat()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTotalRewards(lotteryContract)
      setRewards(new BigNumber(res))
    }

    if (lotteryContract) {
      fetchBalance()
    }
  }, [lotteryContract, fastRefresh])

  console.log('lotteryPrizeAmount', rewards.toString())

  return rewards
}

export const useTotalClaim = () => {
  const [claimAmount, setClaimAmount] = useState(new BigNumber(0))
  const [claimLoading, setClaimLoading] = useState(false)
  const { account } = useWallet()
  const ticketsContract = useLotteryTicket()
  const lotteryContract = useLottery()

  const fetchBalance = useCallback(async () => {
    setClaimLoading(true)
    const claim = await getTotalClaim(lotteryContract, ticketsContract, account)
    setClaimAmount(claim)
    setClaimLoading(false)
  }, [account, lotteryContract, ticketsContract])

  useEffect(() => {
    if (account && lotteryContract && ticketsContract) {
      fetchBalance()
    }
  }, [account, fetchBalance, lotteryContract, ticketsContract])

  return { claimLoading, claimAmount }
}

export const useTotalClaimForMkat = () => {
  const [claimAmount, setClaimAmount] = useState(new BigNumber(0))
  const [claimLoading, setClaimLoading] = useState(false)
  const { account } = useWallet()
  const ticketsContract = useLotteryTicketForMkat()
  const lotteryContract = useLotteryForMkat()

  const fetchBalance = useCallback(async () => {
    setClaimLoading(true)
    const claim = await getTotalClaim(lotteryContract, ticketsContract, account)
    setClaimAmount(claim)
    setClaimLoading(false)
  }, [account, lotteryContract, ticketsContract])

  useEffect(() => {
    if (account && lotteryContract && ticketsContract) {
      fetchBalance()
    }
  }, [account, fetchBalance, lotteryContract, ticketsContract])

  return { claimLoading, claimAmount }
}

export const useWinningNumbers = () => {
  const [winngNumbers, setWinningNumbers] = useState([0, 0, 0, 0])
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const rewards = await getWinningNumbers(lotteryContract)
      setWinningNumbers(rewards)
    }

    if (lotteryContract) {
      fetchBalance()
    }
  }, [fastRefresh, lotteryContract, setWinningNumbers])

  return winngNumbers
}

export const useWinningNumbersForMkat = () => {
  const [winngNumbers, setWinningNumbers] = useState([0, 0, 0, 0])
  const lotteryContract = useLotteryForMkat()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const rewards = await getWinningNumbers(lotteryContract)
      setWinningNumbers(rewards)
    }

    if (lotteryContract) {
      fetchBalance()
    }
  }, [fastRefresh, lotteryContract, setWinningNumbers])

  return winngNumbers
}

export const useMatchingRewardLength = (numbers) => {
  const [matchingNumbers, setMatchingNumbers] = useState(0)
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const matchedNumbaers = await getMatchingRewardLength(lotteryContract, numbers)
      setMatchingNumbers(matchedNumbaers)
    }

    if (lotteryContract) {
      fetchBalance()
    }
  }, [lotteryContract, numbers, fastRefresh])

  return matchingNumbers
}

export const useMatchingRewardLengthForMkat = (numbers) => {
  const [matchingNumbers, setMatchingNumbers] = useState(0)
  const lotteryContract = useLotteryForMkat()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const matchedNumbaers = await getMatchingRewardLengthForMkat(lotteryContract, numbers)
      setMatchingNumbers(matchedNumbaers)
    }

    if (lotteryContract) {
      fetchBalance()
    }
  }, [lotteryContract, numbers, fastRefresh])

  return matchingNumbers
}

export const useAllocation = () => {
  const [distrubution, setDistribution] = useState([0, 0, 0])
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const [firstReward, secondReward, thirdReward] = await getAllocation(lotteryContract)
      setDistribution([firstReward, secondReward, thirdReward])
    }

    if (lotteryContract) {
      fetchBalance()
    }
  }, [lotteryContract, fastRefresh])

  return distrubution
}

export default useTickets
