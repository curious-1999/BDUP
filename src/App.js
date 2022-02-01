import React, { Component } from "react";
import routes from "../src/routes";
// import Routes from "../src/routes";
// import routes2 from "../src/routes2";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import "./assets/css/materialdesignicons.min.css";

import "./assets/scss/themes.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
            {/* <Route exact path={"/abcdfff"} component={routes2}/> */}
          </Switch>
        </Router>
       {/* <Routes/>  */}
      </React.Fragment>
    );
  }
}

export default withRouter(App);
