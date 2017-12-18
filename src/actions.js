import { NEW_GAME, REMOVE_GAME, SCORE_EVENT } from "./actionTypes";

export const startGame = (players, timestamp) => {
  return {
    type: NEW_GAME,
    players,
    timestamp
  };
};

export const throwArrow = (gameId, res) => {
  console.log(`GameId ${gameId} - Type: ${res.type}, Value: ${res.value}`);
  return {
    type: SCORE_EVENT,
    id: gameId,
    res
  };
};

export const removeGame = gameId => {
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
