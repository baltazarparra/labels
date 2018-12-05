import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
  flex: 1;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 2em;

  h1 {
    flex: 1;
  }
`

const HomeLink = styled.a`
  flex: 1;
  font-size: 1.4em;
  text-align: right;
`

const Header = () => (
  <Head>
    <h1>Labels</h1>
    <HomeLink href="/">home</HomeLink>
  </Head>
)

export default Header
