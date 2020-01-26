import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(players => this.setState({ players: players }))
      .catch(err => console.log('err'))
  }

  render() {
    return (
      <>
        <h1>Women's World Cup players ranked in search interest, June-July 2019, worldwide</h1>
      </>
    )
  }
}

export default App
