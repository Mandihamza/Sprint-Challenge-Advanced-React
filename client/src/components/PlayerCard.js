import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PlayerCard = players => (
    
        <Card fluid>
            <Image
            src="https://source.unsplash.com/featured/?soccer,women/340X230"
            class="ui small image"
            wrapped
            ui={false}
            />
            <Card.Content>
            <Card.Header>{players.name}</Card.Header>
            <Card.Description>
                <span>Country: {players.country}</span>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <p>
                <Icon name="search" />
                Google searches: {players.searches}
            </p>
            </Card.Content>
        </Card>
)

export default PlayerCard
