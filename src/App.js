import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import { selectSignedIn } from './features/userSlice';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './components/Profile';
import Page from './components/Page';


function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    //BEM convention
    <div className="app">
      <Router>
        <Switch>
          <Route path="/profile">
              <Profile/>
          </Route>
          <Route path="/page">
              <Page/>
          </Route>
          <Route path="/">
            <Navbar/>
            <Homepage/>
            {isSignedIn && <Blog/>}
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
