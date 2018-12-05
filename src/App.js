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
      userNotFound: false,
      starredList: []
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
    this.setState({loading: true, userNotFound: false})
    let user = this.state.username
    fetch(`https://api.github.com/users/${user}/starred`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          starredList: response.map((item) => {
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
      }).catch(err => {
        this.setState({loading: false, userNotFound: true, username: ''})
        console.error(err)}
      )
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
          getUsername={this.getUsername}
          handleSearch={this.handleSearch}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

export default App
