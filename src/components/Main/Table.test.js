import React from 'react'
import ReactDOM from 'react-dom'
import Table from './Table.js'

it('renders table content without crashing', () => {
  const list = [1, 2, 3, 4]
  const div = document.createElement('div')
  ReactDOM.render(<Table starredList={list} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
