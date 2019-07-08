import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing, TopNavbar } from "./components/layout";

import "./index.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
