import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Heading } from '@pancakeswap-libs/uikit'
import PastLotteryRoundViewer from './components/PastLotteryRoundViewer'
import PastDrawsHistoryCard from './components/PastDrawsHistory/PastDrawsHistoryCard'

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
  flex-direction: column;
`

const BunnyImageWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
`

const CommingSoon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 164px);
  justify-content: center;
`

const PastDrawsPage: React.FC = () => {
  return (
    <CommingSoon>
      <Heading size="xl">Comming Soon!</Heading>
    </CommingSoon>
    // <Cards>
    //   <PastLotteryRoundViewer />
    //   <SecondCardColumnWrapper>
    //     <PastDrawsHistoryCard />
    //     <BunnyImageWrapper>
    //       <img src="/images/pancake-lottery-bunny.png" alt="lottery bunny" />
    //     </BunnyImageWrapper>
    //   </SecondCardColumnWrapper>
    // </Cards>
  )
}

export default PastDrawsPage