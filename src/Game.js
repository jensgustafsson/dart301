import * as React from 'react';
import { connect } from 'react-redux';

import Dartboard from './Dartboard';

const Game = (props) => {

    const gameExists = props.id !== undefined;

    if (gameExists) {
        return (
            <div>
                <Dartboard gameId={props.id}/>
            </div>
        )
    } else {
        return (<div/>)
    }
}

const mapStateToProps = (state, ownProps) => {
    const ownId = ownProps.match.params.id;
    const game = state.dartApp.games[ownId];
    return game ? { ...game, id: ownId } : {};
}
  
export default connect(mapStateToProps)(Game);