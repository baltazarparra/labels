import React from 'react'
import styled from 'styled-components'

const Search = styled.div`
  position: absolute;
  top: 6em;
  left: 2em;

  label {
    padding: .4em;
    border: solid 2px;
    border-radius: 26px 28px 38px 36px;
  }

  input {
    width: 200px;
    padding-left: 4px;
    border: 0;
    font-size: 1.2em;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:focus {
      width: 300px;
      outline: 0;
    }
  }
`

const SearchRepo = () => (
  <Search>
    <label>
      <span role="img" aria-label="serach icon">🔎</span>
      <input placeholder="Search repositories" />
    </label>
  </Search>
)

export default SearchRepo
