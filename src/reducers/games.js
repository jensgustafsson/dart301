import {
    NEW_GAME,
    REMOVE_GAME,
    COMPLETE_GAME,
    SCORE_EVENT
} from '../actionTypes'

const games = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case NEW_GAME:
            newState = { ...state }
            newState[action.id] = {
                timestamp: action.timestamp,
                players: [...action.players],
                completed: false,
                throws: 0
            }
            return newState;
        case SCORE_EVENT:
            console.log('score...');
            let activeGame = { ...state[action.id]}
            activeGame.throws +=1;
            newState = { ...state };
            newState[action.id] = activeGame;
            return newState;
        case REMOVE_GAME:
            newState = {...state};
            delete newState[action.id];
            return newState;
        case COMPLETE_GAME:
            newState = {...state};
            newState[action.id].completed = true;
            return newState;
        default:
            return state
    }
}
    
export default games;