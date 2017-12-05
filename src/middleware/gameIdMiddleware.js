import { NEW_GAME } from '../actionTypes'

let nextId = 0;

const getNextId = () => {
    return nextId++;
}

const gameIdMiddleware = store => next => action => {
    if (action.type === NEW_GAME) {
        action.id = getNextId()
    }
    return next(action)
}

export default gameIdMiddleware;