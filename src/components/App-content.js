import React from 'react'
import Header from './Header/Header'
import styled from 'styled-components'

const Wraper = styled.div`
  display: flex;
`

const AppContent = () => (
  <Wraper>
    <Header />
    <main>
      <label>
      https://github.com/
      <input placeholder="username" />
      </label>
    <button>get repositories ▶</button>
    </main>
  </Wraper>
)

export default AppContent
