import React from 'react'
import styled from 'styled-components'

const MainWraper = styled.main`
  font-size: 1.2em;
`

const SearchInput = styled.input`
  font-size: 1em;
  padding: .2em;
  margin: 0 .2em;
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border-radius: 155px 15px 225px 15px/15px 205px 15px 255px;
  border:solid 4px #41403E;
  &:focus {
    outline: 0;
  }
`

const ActionButton = styled.button`
  display: block;
  padding: .4em 1em;
  margin: 1em auto;
  font-size: 1em;
  background: none;
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,0.75);
  border-radius: 155px 15px 225px 15px/15px 205px 15px 255px;
  border:solid 4px #41403E;
`

const Main = () => (
  <MainWraper>
    <label>
      https://github.com/
      <SearchInput placeholder="username" />
    </label>
    <ActionButton>get repositories ▶</ActionButton>
  </MainWraper>
)

export default Main
