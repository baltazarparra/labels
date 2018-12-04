import React from 'react'
import styled from 'styled-components'

const Search = styled.input`
  position: absolute;
  top: 6em;
  left: 2em;
`

const SearchRepo = () => (
  <Search placeholder="Search repositories" />
)

export default SearchRepo
