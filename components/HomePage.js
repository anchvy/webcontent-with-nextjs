import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import { Container } from './Layout'
import ArticleList from './ArticleList'
import useData from '../hooks/useData'
import { ON_DESKTOP } from '../utils/style'

const ArticleSection = styled.div`
  padding: 44px 0;
`
const StyledContainer = styled(Container)`
  background: white;
  border-radius: 15px 15px 0 0;
  position: relative;
  top: -15px;

  ${ON_DESKTOP`
    border-radius: 0;
    top: 0;
  `}
`

/* -------------------------------------------- *
 * REACT COMPONENT
 * -------------------------------------------- */

const HomeComponent = props => {
  const data = useData()

  return (
    <>
      <Header />
      <StyledContainer>
        <ArticleSection>
          <ArticleList items={data} />
        </ArticleSection>
        <ArticleSection>
          <ArticleList items={data} />
        </ArticleSection>
      </StyledContainer>
    </>
  )
}

export default HomeComponent
