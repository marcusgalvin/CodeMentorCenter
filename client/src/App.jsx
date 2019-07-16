import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing, TopNavbar } from "./components/layout";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import AboutUs from "./components/layout/AboutUs";
import Dashboard from "./components/layout/Dashboard";
import ProfileEdit from "./components/layout/ProfileEdit";

import "./index.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <TopNavbar />
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/ProfileEdit" component={ProfileEdit} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
        </Switch>
        <Route path="/AboutUs" component={AboutUs} />
      </Fragment>
    </Router>
  );
};

export default App;
