import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux'
import App from './App';
import dartApp from './reducers'
import gameIdMiddleware from './middleware/gameIdMiddleware'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { history } from './history';

let store = createStore(
  combineReducers({
    routing: routerReducer,
    dartApp
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerMiddleware(history), gameIdMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
