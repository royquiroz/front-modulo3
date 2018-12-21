import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import NewPlace from "./components/Place/NewPlace";

const Router = ({ user, updateUser }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/profile"
      render={props =>
        user ? <Profile {...props} user={user} /> : <Redirect to="/" />
      }
    />
    <Route
      exact
      path="/place"
      render={props => (user ? <NewPlace {...props} /> : <Redirect to="/" />)}
    />
  </Switch>
);

export default Router;
