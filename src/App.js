import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import React, { useState, Fragment } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  
  const searchUsers = async text => {

    // API Call URL with search functionality
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    setLoading(true);

    // Fetch user from Github API
    
    try {
      const res = await axios.get(url);
      // Set the user to state
      setUsers(res.data.items);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  // Get a single user details
  const getUser = async username => {
    // API Call URL with search functionality
    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    setLoading(true);
    
    const res = await axios.get(url);
    // Set the user to state
    setUser(res.data);
    setLoading(false);
  }

  // Get user's 5 latest Repos
  const getUserRepos = async username => {
    // API Call URL with search functionality
    const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    setLoading(true);

    const res = await axios.get(url);
    // Set the user to state
    setRepos(res.data);
    setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (msg, type) => {
    setAlert({msg, type});

    setTimeout(() => setAlert(null), 2500);
  }

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length>0 ? true:false} showAlert={showAlert}/>
                <Users users={users} loading={loading}/>
              </Fragment>
            )}/>
            <Route exact path='/about' render={About} />
            <Route exact path='/user/:login' render={props => (
              <User {...props} user={user} loading={loading} getUser={getUser} getUserRepos={getUserRepos} repos={repos}/>
            )
            }/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
