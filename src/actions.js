export const START_NEW_GAME = 'START_NEW_GAME';
export const TERMINATE_GAME = 'TERMINATE_GAME';
export const SCORE_EVENT = 'SCORE_EVENT';

export const startGame = (gameId, players) => {
    return {
        type: START_NEW_GAME,
        gameId,
        players
    };
};

export const terminateGame = (gameId) => {
    return {
        type: TERMINATE_GAME,
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