import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

const Router = ({ user }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/profile"
      render={props =>
        user ? <Profile {...props} user={user} /> : <Redirect to="/" />
      }
    />
  </Switch>
);

export default Router;
