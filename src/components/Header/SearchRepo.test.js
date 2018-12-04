import React from 'react'
import ReactDOM from 'react-dom'
import SearchRepo from './SearchRepo'

it('renders search content without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchRepo />, div)
  ReactDOM.unmountComponentAtNode(div)
})
