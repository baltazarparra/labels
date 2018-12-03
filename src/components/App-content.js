import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import styled from 'styled-components'

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const AppContent = () => (
  <Wraper>
    <Header />
    <Main />
  </Wraper>
)

export default AppContent
