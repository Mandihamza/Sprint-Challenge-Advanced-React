import React, { Component } from 'react'
import { Grid, Container, Header, Segment } from 'semantic-ui-react'

import PlayerCard from './components/PlayerCard.js'
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
      <Container texAlign='center'>
        <Segment basic padded='very'>
        <Header as='h1' textAlign='center' color='pink'>
          Women's World Cup players ranked in search interest, June-July 2019,
          worldwide
        </Header>
        </Segment>
        <Grid celled container stackable columns={3} centered padded>
          <Grid.Row textAlign='justified'>
        {this.state.players.map(players => (
          <Grid.Column>
            <PlayerCard
                name={players.name}
                country={players.country}
                searches={players.searches}
              />
              </Grid.Column>
        ))}
        </Grid.Row>
        </Grid>
        </Container>
      </>
    )
  }
}

export default App
