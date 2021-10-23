import React, { Fragment } from 'react';
import logo from './logo.svg';
import Home from './components/home/Main';
import Admin from './components/admin/Admin';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/reserved" component={Home} />
          <Route exact path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
