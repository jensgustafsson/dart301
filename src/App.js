import * as React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from './history';

import './App.css';

import NewGame from './NewGame';
import Game from './Game';
import Games from './Games';

const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Header/>
      <Main/>
    </div>
  </ConnectedRouter>
);

const Main = () => (
  <div>
    <Switch>      
      <Route path="/new" component={NewGame}/>
      <Route path="/game/:id" component={Game}/>      
      <Route path="/game" component={Games}/>
    </Switch>
  </div>
);

const Header = () => (
  <header>
    <nav>
      <ul> 
        <ol><Link to={"/new"}>New game</Link></ol>
        <ol><Link to={"/game"}>Ongoing games</Link></ol>
      </ul> 
    </nav>
  </header>
);

export default App;