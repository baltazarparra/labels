import React, { Component } from 'react'
import AppContent from './components/App-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      loaded: false,
      taging: false,
      starred: []
    }
  }

  handleSearch = () => {
    this.setState({loading: true})
    fetch('https://api.github.com/users/baltazarparra/starred')
      .then(response => response.json())
      .then(response => {
        this.setState({
          starred: response.map((item) => {
            return {
              name: item.name,
              link: item.html_url,
              description: item.description,
              language: item.language
            }
          })
        }, () => {
          this.setState({ loading: false, loaded: true })
        })
      }).catch(err => console.error(err))
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
