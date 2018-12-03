import React, { Component } from 'react'
import AppContent from './components/App-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      loaded: false
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

  render() {
    return (
      <div className="App">
        <AppContent
          {...this.state}
          handleSearch={this.handleSearch}
        />
      </div>
    )
  }
}

export default App
