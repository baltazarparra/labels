import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal.js'

it('renders modal content without crashing', () => {
  const name = 'myname'
  const div = document.createElement('div')
  ReactDOM.render(<Modal repoInfo={name} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
