import React from 'react'
import styled, { keyframes } from 'styled-components'

const move = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 28px 0;
  }
`
const LoaderBar = styled.span`
  display: block;
  margin: 1em;
  width: 180px;
  height: 36px;
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border-radius: 155px 15px 225px 15px/15px 205px 15px 255px;
  border:solid 4px #41403E;
  background-image:
    repeating-linear-gradient(
      -45deg,
      #ccc,
      #ccc 11px,
      #eee 10px,
      #eee 20px
    );
  background-size: 28px 28px;
  animation: ${move} .5s linear infinite;
`

const Loading = () => (
  <div>
    <LoaderBar></LoaderBar>
    <p>Getting the repositories list from Github...</p>
  </div>
)

export default Loading
