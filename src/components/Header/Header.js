import React from 'react'
import styled from 'styled-components'

const HeaderWraper = styled.header`
  flex: 1;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 2em;
`

const Brand = styled.h1`
  flex: 1;
`

const Link = styled.a`
  flex: 1;
  font-size: 1.4em;
  text-align: right;
`

const Header = () => (
  <HeaderWraper>
    <Brand>Labels</Brand>
    <Link href="/">home</Link>
  </HeaderWraper>
)

export default Header
