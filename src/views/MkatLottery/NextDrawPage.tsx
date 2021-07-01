import React from 'react'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { BaseLayout } from 'MOONKAT_uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalClaimForMkat } from 'hooks/useTickets'
import YourPrizesCard from './components/YourPrizesCard'
import UnlockWalletCard from './components/UnlockWalletCard'
import TicketCard from './components/TicketCard'
import TotalPrizesCard from './components/TotalPrizesCard'
import WinningNumbers from './components/WinningNumbers'
import HowItWorks from './components/HowItWorks'
import tokenInfo from '../../config/constants/tokenInfo'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;
  & > div {
    grid-column: span 6;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const SecondCardColumnWrapper = styled.div<{ isAWin?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isAWin ? 'column' : 'column-reverse')};
`

const NextDrawPage: React.FC = () => {
  const { account } = useWallet()
  const { claimAmount } = useTotalClaimForMkat()
  const winnings = getBalanceNumber(claimAmount, tokenInfo[0].decimals)
  const isAWin = winnings > 0

  return (
    <>
      <Cards>
        <div>
          <TotalPrizesCard />
        </div>
        <SecondCardColumnWrapper isAWin={isAWin}>
          {!account ? (
            <UnlockWalletCard />
          ) : (
            <>
              <YourPrizesCard />
              <TicketCard isSecondCard={isAWin} />
            </>
          )}
        </SecondCardColumnWrapper>
      </Cards>
      <HowItWorks />
      {/* legacy page content */}
      <WinningNumbers />
    </>
  )
}

export default NextDrawPage