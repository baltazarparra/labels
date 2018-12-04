import React, { Component } from 'react'
import AppContent from './components/App-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      loaded: false,
      taging: false
    }
  }

  handleSearch = () => {
    this.setState({loading: true})
    return this.handleLoaded()
  }

  handleLoaded = () => {
    setTimeout(() => {
      this.setState({loaded: true})
    }, 2000)
  }

  openModal = () => {
    this.setState({taging: true})
  }

  closeModal = () => {
    this.setState({taging: false})
  }

  render() {
    return (
      <div className="App">
        <AppContent
          {...this.state}
          handleSearch={this.handleSearch}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

export default App
