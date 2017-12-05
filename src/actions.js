import {
    NEW_GAME,
    REMOVE_GAME,
    SCORE_EVENT
} from './actionTypes'


export const startGame = (players, timestamp) => {
    return {
        type: NEW_GAME,
        players,
        timestamp
    };
};

export const removeGame = (gameId) => {
    return {
        type: REMOVE_GAME,
        gameId
    };
};

export const score = (gameId, player, score) => {
    return {
        type: SCORE_EVENT,
        gameId,
        player,
        score
    };
};