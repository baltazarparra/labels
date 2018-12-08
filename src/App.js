import React, { Component } from 'react'
import AppContent from './components/App-content'
import database from './services/database'
import { API } from './services/API'

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
      rawTags: '',
      clearSearch: false
    }
  }

  getUsername = (e) => {
    const input = e.target
    return this.setUsername(input)
  }

  setUsername = (input) => {
    input.onkeyup = () => {
      this.setState({username: input.value})
    }
  }

  checkStore = (user) => {
    database.listenUserNode(user)
      .then((snapshot) => {
        snapshot.val() === null ? this.saveData() : this.feedData()
      })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.setState({loading: true, userNotFound: false})
    this.checkStore(this.state.username)
  }

  callAPI = (user) => API(user)

  saveData = () => {
    this.callAPI(this.state.username)
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
    return database.setRepoNode(this.state.username, repoList)
  }

  feedData = () => {
    database.listenRepoNode(this.state.username)
      .then((snapshot) => {
        this.setState({ loading: false, loaded: true, starredList: snapshot.val() })
      })
  }

  openModal = (e) =>
    this.setState({taging: true, repoInfo: {name: e.target.title, index: e.target.value}})

  closeModal = () =>
    this.setState({taging: false})

  getTags = (e) => {
    const input = e.target
    input.focus()
    input.onkeyup = () => {
      this.setState({rawTags: input.value.toLowerCase()})
    }
  }

  saveTags = (e) => {
    e.preventDefault()
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
    database.updateTagsNode(this.state.username, repoIndex, tagsList)
    this.feedData()
  }

  searchTags = (e) => {
    const value = e.target.value.toLowerCase()
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
      value ? this.setState({clearSearch: true, starredList: list}) : this.feedData()
    }
  }

  clearTable = () => {
    this.feedData()
    this.setState({clearSearch: false})
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
          clearTable={this.clearTable}
        />
      </div>
    )
  }
}

export default App
