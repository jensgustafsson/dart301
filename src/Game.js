import * as React from 'react';
import { connect } from 'react-redux';

import Dartboard from './Dartboard';

const Game = (props) => {

    const gameExists = props.id !== undefined;

    if (gameExists) {
        return (
            <div>
                <Dartboard/>
            </div>
        )
    } else {
        return (<div/>)
    }
}

const mapStateToProps = (state, ownProps) => {
    const ownId = parseInt(ownProps.match.params.id, 10);
    return state.dartApp.games.find((g) => {
        return g.id === ownId;
    }) || {};
}
  
export default connect(mapStateToProps)(Game);