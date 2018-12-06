import React, { Component } from 'react'
import AppContent from './components/App-content'
import firebase from './services/firebase'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      loaded: false,
      taging: false,
      username: '',
      userNotFound: false,
      starredList: [],
      dbList: []
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

  checkStore = (user) => {
    firebase.database().ref(`/${user}/`).once('value')
      .then((snapshot) => {
        snapshot.val() === null ? this.saveData() : this.feedData()
      })
  }

  handleSearch = (e) => {
    this.setState({loading: true, userNotFound: false})
    this.checkStore(this.state.username)
  }

  saveData = () => {
    let user = this.state.username
    fetch(`https://api.github.com/users/${user}/starred`)
    .then(response => response.json())
    .then(response => {
      const repoList = response.map((item) => {
        return {
          name: item.name,
          link: item.html_url,
          description: item.description,
          language: item.language
        }
      })
      firebase.database().ref(`/${user}/starred`).set(repoList)
      this.setState({ loading: false, loaded: true, starredList: repoList })
    })
    .catch(err => {
      this.setState({loading: false, userNotFound: true, username: ''})
      console.error(err)}
    )
  }

  feedData = () => {
    let user = this.state.username
    firebase.database().ref(`/${user}/starred`).once('value')
    .then((snapshot) => {
      this.setState({ loading: false, loaded: true, starredList: snapshot.val() })
    })
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
