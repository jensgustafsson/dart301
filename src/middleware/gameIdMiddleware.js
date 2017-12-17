import { NEW_GAME } from '../actionTypes';
import { v4 } from 'node-uuid';

const gameIdMiddleware = store => next => action => {
    if (action.type === NEW_GAME) {
        action.id = v4();
    }
    return next(action)
}

export default gameIdMiddleware;