import * as React from 'react';
import './App.css';
import Dartboard from './Dartboard';
import NewGame from './NewGame';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header/>
      <Nav/>
      <Routes/>
    </div>
  </BrowserRouter>
);

const Routes = () => (
  <div>
    <Route exact path="/new" component={NewGame}/>
    <Route exact path="/board" component={Board}/>
    <Route exact path="/" component={Start}/>
    <Route exact path="/score" component={Score}/>
  </div>
);

const Header = () => (
  <div className="App-header">
    <h2>301</h2>
  </div>
);

const Nav = () => (
  <ul> 
    <ol><Link to={"/"}>Overview</Link></ol>
    <ol><Link to={"/new"}>New game</Link></ol>
    <ol><Link to={"/board"}>Board</Link></ol>
    <ol><Link to={"/score"}>Score</Link></ol>
  </ul> 
);

const Board = () => (
  <div>
    <Dartboard/>
  </div>
);

const Score = () => (
  <div/>
);

const Start = () => (
  <div>Welcome</div>
);

export default App;