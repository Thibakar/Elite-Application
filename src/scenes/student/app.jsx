import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./home/home";
import Notification from "./notification";
import AppContainer from "./appContainer/AppContainer";

export default function Student(props) {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${props.match.url}/home`}
          component={() => (
            <AppContainer>
              <Home />
              <Notification />
            </AppContainer>
          )}
        />
      </Switch>
    </Router>
  );
}

Student.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
