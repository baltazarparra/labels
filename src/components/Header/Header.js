import React from 'react'
import styled from 'styled-components'

const Brand = styled.h1`
  position: absolute;
  top: 1em;
  left: 1em;
`

const HomeLink = styled.a`
  position: absolute;
  top: 2em;
  right: 2em;
  font-size: 1.4em;
`

const Header = () => (
  <header>
    <Brand>Labels</Brand>
    <HomeLink href="/">home</HomeLink>
  </header>
)

export default Header
