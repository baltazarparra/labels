import React from 'react'
import styled from 'styled-components'

const Search = styled.div`
  display: block;
  text-align: left;
  margin-right: auto;
  margin-left: 2em;
`

const Label = styled.label`
  padding: .4em;
  border: solid 2px;
  border-radius: 26px 28px 38px 36px;
`

const Input = styled.input`
  width: 200px;
  padding-left: 4px;
  border: 0;
  font-size: 1.2em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:focus {
    outline: 0;
  }
`

const Button = styled.button`
  margin-left: 1em;
  font-size: 1.2em;
  background: silver;
  padding: .4em;
  border: solid 2px;
  border-radius: 26px 28px 38px 36px;
  &:focus {
    outline: 0;
  }
`

const SearchTag = ({searchTags, clearSearch, clearTable}) => (
  <Search>
    <Label>
      <span role="img" aria-label="serach icon">🔎</span>
      <Input placeholder="Search tags" onKeyUp={searchTags} />
    </Label>
    {clearSearch && <Button onClick={clearTable}>clear</Button>}
  </Search>
)

export default SearchTag
