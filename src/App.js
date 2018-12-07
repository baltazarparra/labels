import React, { Component } from 'react'
import AppContent from './components/App-content'
import db from './services/firebase'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      loaded: false,
      taging: false,
      username: '',
      userNotFound: false,
      starredList: [],
      dbList: [],
      repoInfo: {},
      rawTags: ''
    }
  }

  getUsername = (e) => {
    const input = e.target
    let timeout = null
    return this.setUsername(input, timeout)
  }

  setUsername = (input, timeout) => {
    input.onkeyup = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.setState({username: input.value})
      }, 1000)
    }
  }

  checkStore = (user) => {
    db.ref(`/${user}/`).once('value')
      .then((snapshot) => {
        snapshot.val() === null ? this.saveData() : this.feedData()
      })
  }

  handleSearch = (e) => {
    this.setState({loading: true, userNotFound: false})
    this.checkStore(this.state.username)
  }

  callAPI = () =>
    fetch(`https://api.github.com/users/${this.state.username}/starred`)

  saveData = () => {
    this.callAPI()
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
      this.sendData(repoList)
    })
    .catch(err => {
      this.setState({loading: false, userNotFound: true, username: ''})
      console.error(err)
    })
  }

  sendData = (repoList) => {
    this.setState({ loading: false, loaded: true, starredList: repoList })
    return db.ref(`/${this.state.username}/starred`).set(repoList)
  }

  feedData = () => {
    const user = this.state.username
    db.ref(`/${user}/starred`).once('value')
    .then((snapshot) => {
      this.setState({ loading: false, loaded: true, starredList: snapshot.val() })
    })
  }

  openModal = (e) => {
    this.setState({taging: true, repoInfo: {name: e.target.title, index: e.target.value}})
  }

  closeModal = () => {
    this.setState({taging: false})
  }


  getTags = (e) => {
    const input = e.target
    let timeout = null
    input.onkeyup = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.setState({rawTags: input.value})
      }, 400)
    }
  }

  saveTags = () => {
    const tags = this.state.rawTags.split(/[\s,]+/)
    const tagsList = tags.filter((item, index) => {
      return tags.indexOf(item) >= index
    })
    this.sendTags(tagsList)
    this.setState({taging: false})
  }

  sendTags = (tagsList) => {
    const repoIndex = this.state.starredList.findIndex((item) => {
      return item.name === this.state.repoInfo.name
    })
    db.ref(`/${this.state.username}/starred/${repoIndex}`).update({
      tags: tagsList
    })
    this.feedData()
  }

  searchTags = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    this.returnSearch(value, keyCode, ENTER)
  }

  returnSearch = (value, keyCode, ENTER) => {
    if (keyCode === ENTER) {
      const list = this.state.starredList.filter((item) => {
        if (item.tags) {
          if (item.tags.includes(value)) return true
        }
        return null
      })
      value ? this.setState({starredList: list}) : this.feedData()
    }
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
          saveTags={this.saveTags}
          getTags={this.getTags}
          searchTags={this.searchTags}
        />
      </div>
    )
  }
}

export default App
