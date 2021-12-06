import React, {Componet} from 'react'

import { Switch} from "react-router-dom";

import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import SignIn from "../components/SignIn";

import PrivateRoute from '../components/routes/PrivateRoute';
import PublicRoute from "../components/routes/PublicRoute";

// *Importing helper functions
const Layout = () => {
  return(
    <Switch>
      <PublicRoute restricted={false} component={Home} path="/" exact />
      <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
      <PrivateRoute component={Dashboard} path="/dashboard" exact />
    </Switch>
  )
};

// const Layout = () => {
//   return (
//     <div>
//       <Switch>
//         <Route path="/" exact>
//           <Redirect to='/welcome' />
//         </Route>
//         <Route exact path="/welcome">
//           <Welcome />
//         </Route>
//         <Route exact path="/about">
//           <About />
//         </Route>
//         <Route exact path="/signin">
//           <UserForm />
//         </Route>
//         {/* <Route exact path="/">

//           {loggedIn() ? <Redirect to='/user' /> : <Welcome />}
//         </Route> */}
//         {/* <Route exact path="/user-info/:userId">
//           <UserInfo />
//         </Route> */}
//         <Route exact path="/user">
//           <UserInfo />
//         </Route>
//       </Switch>
//     </div>
//   );
// };

export default Layout;
