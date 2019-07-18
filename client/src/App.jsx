import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing, TopNavbar } from "./components/layout";

/* Jose Login Below
  import Login from "./Auth/Login";
*/

/* Temp Login Page - for testing */
import Login from "./components/layout/Login";

/* Not being use yet
  import Logout from "./Auth/Logout";
*/
import Register from "./components/layout/Register";
import AboutUs from "./components/layout/AboutUs";
import Dashboard from "./components/layout/Dashboard";
import ProfileEdit from "./components/layout/ProfileEdit";
import CmcCareerDevs from "./components/layout/CmcCareerDevs";

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
          <Route path="/register" component={Register} />
        </Switch>
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/CmcCareerDevs" component={CmcCareerDevs} />
      </Fragment>
    </Router>
  );
};

export default App;
