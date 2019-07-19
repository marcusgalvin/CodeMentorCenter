import React, { Fragment, useEffect } from "react";
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
import Alert from "./components/layout/Alert";
import Register from "./components/layout/Register";
import AboutUs from "./components/layout/AboutUs";
import Dashboard from "./components/layout/Dashboard";
import ProfileEdit from "./components/layout/ProfileEdit";
import CmcCareerDevs from "./components/layout/CmcCareerDevs";
import Mentors from "./components/layout/Mentors";
import Mentees from "./components/layout/Mentees";

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
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/CmcCareerDevs" component={CmcCareerDevs} />
          <Route path="/Mentors" component={Mentors} />
          <Route path="/Mentees" component={Mentees} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
