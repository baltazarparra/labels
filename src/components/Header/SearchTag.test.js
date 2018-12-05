import React from 'react'
import ReactDOM from 'react-dom'
import SearchTag from './SearchTag'

it('renders search content without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchTag />, div)
  ReactDOM.unmountComponentAtNode(div)
})
