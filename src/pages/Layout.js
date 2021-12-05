// * components
import Welcome from "./Welcome";
import About from "./About";
import UserForm from "../components/UserForm";
import UserInfo from "../components/UserInfo";

import { Route, Switch, Redirect } from "react-router-dom";

// *Importing helper functions 

import loggedIn from '../helpers/loggedIn'

const Layout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/signin">
          <UserForm />
        </Route>
        <Route exact path="/">

          {loggedIn() ? <Redirect to='/user' /> : <Welcome />}
        </Route>
        {/* <Route exact path="/user-info/:userId">
          <UserInfo />
        </Route> */}
        <Route exact path="/user">
          <UserInfo />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
