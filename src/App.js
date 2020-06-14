import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from './containers/profile';
import Home from './containers/home';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './containers/navbar';
import NewCompany from './containers/newCompany';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/register-company">
            <NewCompany />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
