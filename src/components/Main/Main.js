import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const MainWraper = styled.main`
  flex: 1;
  font-size: 1.4em;
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
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    background-color: #ebebeb;
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  }
  &:focus {
    outline: 0;
  }
`

const Main = ({handleSearch, getUsername}) => (
  <MainWraper>
    <label>
      https://github.com/
      <SearchInput onChange={getUsername} placeholder="username" />
    </label>
    <ActionButton onClick={handleSearch}>get repositories ▸</ActionButton>
  </MainWraper>
)

Main.Proptypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Main
