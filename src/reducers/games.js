import {
    NEW_GAME,
    REMOVE_GAME,
    COMPLETE_GAME
} from '../actionTypes'

const games = (state = [], action) => {
    switch (action.type) {
        case NEW_GAME:
            return [
                ...state,
                {
                id: action.id,
                timestamp: action.timestamp,
                players: [...action.players],
                completed: false
                }
            ]
        case REMOVE_GAME:
            return state.filter((g) => g.id !== action.id)
        case COMPLETE_GAME:
            return state.map((g) => {
                if (g.id === action.id) {
                    g.completed = true; 
                }
                return g;
            })
        default:
            return state
    }
}
    
export default games;