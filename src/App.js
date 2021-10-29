import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Home from './components/home/Main';
import Admin from './components/admin/Admin';
import Login from './components/login/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

function App() {

  const [ loggedInUser, setLoggedInUser ] = useState(false);
  const [ loggedInAdmin, setLoggedInAdmin ] = useState(false);
  const [ user, setUser ] = useState({});
  // const location = useLocation();

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser])

  return (
    <Router>
      <div className="App">
          <Route exact path="/login" render={(props) => (
            <Login 
              setLoggedInUser={setLoggedInUser} 
              setLoggedInAdmin={setLoggedInAdmin} 
              setUser={setUser} 
            />
          )} />
          <Route exact path="/home" render={(props) => (
            <Home user={user} />
          )} />
          <Route exact path="/admin" component={Admin} />
          
          <Route exact path="/" render={() => (
            loggedInUser ? (
              <Redirect to="/home"/>
            ) : loggedInAdmin ? (
              <Redirect to="/admin"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          
          <Route exact path="/login" render={() => (
            loggedInUser ? (
              <Redirect to="/home"/>
            ) : loggedInAdmin ? (
              <Redirect to="/admin"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>

          <Route exact path="/home" render={() => (
            loggedInUser ? (
              <Redirect to="/home"/>
            ) : loggedInAdmin ? (
              <Redirect to="/admin"/>
            ) : (
              <Redirect to="/login"/>

            )
          )}/>

          <Route exact path="/admin" render={() => (
            loggedInAdmin ? (
              <Redirect to="/admin"/>
            ) : loggedInUser ? (
              <Redirect to="/home"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>

      </div>
    </Router>
  );
}

export default App;
