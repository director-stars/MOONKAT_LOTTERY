import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, useModal } from 'MOONKAT_uikit'
import useI18n from 'hooks/useI18n'
import { useGetLotteryHasDrawnForMkat } from 'hooks/useGetLotteryHasDrawn'
import { useLotteryAllowanceForMkat } from 'hooks/useAllowance'
import { useLotteryApproveForMkat } from 'hooks/useApprove'
import { useTicketsForMkat } from 'hooks/useTickets'
import useTokenBalance from 'hooks/useTokenBalance'
import { getCakeAddressForMkat } from 'utils/addressHelpers'
import BuyTicketModal from './BuyTicketModal'
import MyTicketsModal from './UserTicketsModal'
import PurchaseWarningModal from './PurchaseWarningModal'

const CardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[3]}px;
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: space-between;
  }
`

const TicketCard: React.FC = () => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const TranslateString = useI18n()
  const allowance = useLotteryAllowanceForMkat()
  const { onApprove } = useLotteryApproveForMkat()
  const lotteryHasDrawn = useGetLotteryHasDrawnForMkat()
  const cakeBalance = useTokenBalance(getCakeAddressForMkat())

  const tickets = useTicketsForMkat()
  const ticketsLength = tickets.length
  const [onPresentMyTickets] = useModal(<MyTicketsModal myTicketNumbers={tickets} from="buy" />)
  const [onPresentApprove] = useModal(<PurchaseWarningModal />)
  const [onPresentBuy] = useModal(<BuyTicketModal max={cakeBalance} tokenName="CAKE" />)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
      onPresentApprove()
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, onPresentApprove])

  const renderLotteryTicketButtons = () => {
    if (!allowance.toNumber()) {
      return (
        <>
          <Button fullWidth disabled>
            {TranslateString(432, 'View your tickets')}
          </Button>
          <Button fullWidth disabled={requestedApproval} onClick={handleApprove}>
            {TranslateString(999, 'Approve MKAT')}
          </Button>
        </>
      )
    }
    return (
      <>
        <Button
          style={{ marginRight: '8px' }}
          fullWidth
          disabled={ticketsLength === 0}
          variant="secondary"
          onClick={onPresentMyTickets}
        >
          {TranslateString(432, 'View your tickets')}
        </Button>
        <Button id="lottery-buy-start" fullWidth onClick={onPresentBuy}>
          {TranslateString(430, 'Buy ticket')}
        </Button>
      </>
    )
  }

  return (
    <CardActions>
      {lotteryHasDrawn ? (
        <Button disabled> {TranslateString(999, 'On sale soon')}</Button>
      ) : (
        renderLotteryTicketButtons()
      )}
    </CardActions>
  )
}

export default TicketCard