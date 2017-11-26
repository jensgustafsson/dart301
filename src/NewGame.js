import * as React from 'react';

import Participants from './Participants';
import AddPlayerForm from './AddPlayerForm';

class NewGame extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      players: []
    };
  }

  startGame () {
    if (this.state.players.length === 2) {
      this.setState({ players: [] });
      console.log('Starting game!');
    }
  }

  removePlayer (index) {
    let state = {...this.state};
    state.players.splice(index, 1);    
    this.setState(state);
  }

  createPlayer (event) {
    event.preventDefault();
    if (this.state.players.length === 2) {
      return;
    }
    const name = event.target.elements[0].value;
    event.target.reset();
    let state = {...this.state};
    console.log(`User ${name} created.`);
    state.players.push(name);
    this.setState(state);
  }

  render() {
    const gameReadyToStart = this.state.players.length === 2;
    const showAddPlayer = !gameReadyToStart;
    
    return (
      <div>
        <h1>Create new game</h1>
        <Participants removePlayer={(i) => this.removePlayer(i)} players={this.state.players}/>
        {showAddPlayer ? 
          <AddPlayerForm onCreate={(event) => this.createPlayer(event)}/> : 
          <h3>Waiting for user to start the game...</h3>
        }
        {gameReadyToStart ?
          (
            <div>
              <button onClick={() => this.startGame()}>
                Start game!
              </button>
            </div>
          ) : ''}
      </div>
    );
  }
}

export default NewGame;