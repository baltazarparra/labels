import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Labels</h1>
        </header>
        <main>
          <label>
            https://github.com/
            <input placeholder="username" />
          </label>
          <button>get repositories ▶</button>
        </main>
      </div>
    )
  }
}

export default App
