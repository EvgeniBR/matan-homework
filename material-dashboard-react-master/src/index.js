/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import { PersistGate } from "redux-persist/integration/react";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import SignInSignUp from "components/SignInSignUp/SignInSignUp.component";


const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
  <PersistGate persistor={persistor}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route path="/rtl" component={Admin} />
      <Route path="/user/signin" component={SignInSignUp} />
      
      
      <Route
        exact
        path="/"
        component={SignInSignUp}
        render={() =>
          this.props.currentUser ? <Redirect to="/admin/dashboard" /> : <SignInSignUp />
        }
      />
    </Switch>
    </PersistGate>
  </Router>
   </Provider>,
  document.getElementById("root")
);
