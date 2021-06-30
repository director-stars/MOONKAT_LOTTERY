import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Heading, Won, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useMultiClaimLotteryForMkat } from 'hooks/useBuyLottery'
import { useTicketsForMkat, useTotalClaimForMkat } from 'hooks/useTickets'
import Loading from '../Loading'
import MyTicketsModal from '../TicketCard/UserTicketsModal'
import tokenInfo from '../../../../config/constants/tokenInfo'

const WinningsWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

const IconWrapper = styled.div`
  margin-bottom: 16px;
  svg {
    width: 80px;
    height: 80px;
  }
`

const StyledCardActions = styled.div`
  margin-top: ${(props) => props.theme.spacing[3]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const StyledButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacing[1]}px;
`

const PrizesWonContent: React.FC = () => {
  const [requestedClaim, setRequestedClaim] = useState(false)
  const TranslateString = useI18n()
  const { claimLoading, claimAmount } = useTotalClaimForMkat()
  const { onMultiClaim } = useMultiClaimLotteryForMkat()
  const tickets = useTicketsForMkat()
  const [onPresentMyTickets] = useModal(<MyTicketsModal myTicketNumbers={tickets} from="buy" />)

  const handleClaim = useCallback(async () => {
    try {
      setRequestedClaim(true)
      const txHash = await onMultiClaim()
      // user rejected tx or didn't go thru
      if (txHash) {
        setRequestedClaim(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onMultiClaim, setRequestedClaim])

  const winnings = getBalanceNumber(claimAmount, tokenInfo[0].decimals).toFixed(2)

  return (
    <StyledCardContentInner>
      <IconWrapper>
        <Won />
      </IconWrapper>
      <Heading as="h3" size="lg" color="secondary">
        {TranslateString(999, 'You won!')}
      </Heading>
      {claimLoading && <Loading />}
      {!claimLoading && (
        <>
          <WinningsWrapper>
            <Heading as="h4" size="xl" style={{ marginRight: '6px' }}>
              {winnings}
            </Heading>
            <Heading as="h4" size="lg">
              MKAT
            </Heading>
          </WinningsWrapper>
        </>
      )}
      <StyledCardActions>
        <Button fullWidth disabled={requestedClaim} onClick={handleClaim}>
          {TranslateString(999, 'Collect')}
        </Button>
      </StyledCardActions>
      <StyledButton variant="text" onClick={onPresentMyTickets}>
        {TranslateString(432, 'View your tickets')}
      </StyledButton>
    </StyledCardContentInner>
  )
}

export default PrizesWonContent