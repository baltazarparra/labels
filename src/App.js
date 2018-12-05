import React, { Component } from 'react'
import AppContent from './components/App-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      loaded: false,
      taging: false,
      username: '',
      starred: []
    }
  }

  getUsername = (e) => {
    const input = e.target
    let timeout = null
    input.onkeyup = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.setState({username: input.value})
      }, 1400)
    }
  }

  handleSearch = (e) => {
    this.setState({loading: true})
    let user = this.state.username
    fetch(`https://api.github.com/users/${user}/starred`)
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
          getUsername={this.getUsername}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

export default App
