import React from 'react'
import styled from 'styled-components'

const Brand = styled.header`
  position: absolute;
  top: 1em;
  left: 1em;
`

const Header = () => (
  <Brand>
    <h1>Labels</h1>
  </Brand>
)

export default Header