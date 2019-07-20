import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTopRoute from "./components/layout/ScrollToTopRoute";

/* Jose Login Below
  import Login from "./Auth/Login";
*/
/* Temp Login Page - for testing */
import Login from "./components/layout/Login";
import TopNavbar from "./components/layout/TopNavbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Register from "./components/layout/Register";
import AboutUs from "./components/layout/AboutUs";
import Dashboard from "./components/layout/Dashboard";
import ProfileEdit from "./components/layout/ProfileEdit";
import Mentors from "./components/layout/Mentors";
import Mentees from "./components/layout/Mentees";
import OnlineLearningDetails from "./components/layout/OnlineLearningDetails";

//redux imports
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //adding empty array as 2nd arg means it runs once, like componentdidmount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <TopNavbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/ProfileEdit" component={ProfileEdit} />
          </Switch>
          <section className="container">
            <Alert />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </section>
          <ScrollToTopRoute path="/AboutUs" component={AboutUs} />
          <ScrollToTopRoute
            path="/OnlineLearningDetails"
            component={OnlineLearningDetails}
          />
          <ScrollToTopRoute path="/Mentors" component={Mentors} />
          <ScrollToTopRoute path="/Mentees" component={Mentees} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
