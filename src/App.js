import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Labels</h1>
          <a href="/">Home</a>
        </header>
        <main>
          <label>
            github.com/
            <input placeholder="username..." />
          </label>
          <button>Search repos</button>
        </main>
      </div>
    )
  }
}

export default App
