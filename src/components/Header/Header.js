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

const Logo = styled.a`
  color: black;
  text-decoration: none;
`

const Link = styled.div`
  flex: 1;
  font-size: 1.4em;
  text-align: right;
`

const Header = () => (
  <HeaderWraper>
    <Brand>
      <Logo href="https://baltazarparra.github.io/labels/">Labels</Logo>
    </Brand>
    <Link>
      <a href="https://baltazarparra.github.io/labels/">home</a>
    </Link>
  </HeaderWraper>
)

export default Header
