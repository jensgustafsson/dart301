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
    const ownId = ownProps.match.params.id;
    return state.dartApp.games.find((g) => {
        return g.id === ownId;
    }) || {};
}
  
export default connect(mapStateToProps)(Game);