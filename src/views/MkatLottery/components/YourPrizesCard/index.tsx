import React from 'react'
import styled from 'styled-components'
import { Card, CardBody } from 'moonkat_uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalClaimForMkat } from 'hooks/useTickets'
import PrizesWonContent from './PrizesWonContent'
import NoPrizesContent from './NoPrizesContent'
import tokenInfo from '../../../../config/constants/tokenInfo'

const StyledCard = styled(Card)`
  ${(props) =>
    props.isDisabled
      ? `  
        margin-top: 16px;
        background-color: unset;
        box-shadow: unset;
        border: 1px solid ${props.theme.colors.textDisabled};
        ${props.theme.mediaQueries.sm} {
          margin-top: 24px;
        }
        ${props.theme.mediaQueries.lg} {
          margin-top: 32px;
        }
        `
      : ``}
`

const YourPrizesCard: React.FC = () => {
  const { claimAmount } = useTotalClaimForMkat()

  const winnings = getBalanceNumber(claimAmount, tokenInfo[0].decimals)
  const isAWin = winnings > 0

  return (
    <StyledCard isDisabled={!isAWin} isActive={isAWin}>
      <CardBody>{isAWin ? <PrizesWonContent /> : <NoPrizesContent />}</CardBody>
    </StyledCard>
  )
}

export default YourPrizesCard