import * as React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import { withRouter } from 'react-router-dom';

import Participants from './Participants';
import AddPlayerForm from './AddPlayerForm';
import { startGame } from './actions'


class NewGame extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      players: []
    };
  }

  removePlayer (index) {
    let state = {...this.state};
    state.players.splice(index, 1);
    console.log(`User removed.`);    
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
              <button onClick={() => {
                const players = [...this.state.players];
                let state = {...this.state};
                state.players = [];
                this.setState(state);
                const timestamp = new Date().toJSON();
                const res = this.props.onStartButtonClick(players, timestamp);
                this.props.routeToGamePage(res.id);
              }}>
                Start game!
              </button>
            </div>
          )  : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onStartButtonClick: (players, timestamp) => dispatch(startGame(players, timestamp)),
    routeToGamePage: (gameId) => dispatch(push(`/game/${gameId}`))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGame));