import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import App from "./App";
import dartApp from "./reducers";
import gameIdMiddleware from "./middleware/gameIdMiddleware";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { history } from "./history";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const DEV = true;

const persistedState = loadState();

let store = createStore(
  combineReducers({
    routing: routerReducer,
    dartApp
  }),
  DEV ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : persistedState,
  applyMiddleware(routerMiddleware(history), gameIdMiddleware)
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }),
  1000
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
