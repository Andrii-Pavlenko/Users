import React from "react";
import UsersList from "./components/UsersList";
import { Switch } from "react-router-dom";
import UnknownPage from "./components/UnknownPage";
import UserInfo from "./components/UserInfo";
import { getName } from "./redux/selectors";
import { connect } from "react-redux";

function App({getName}) {
  return (
    <Switch>
      <UsersList exact path='/'/>

      <UserInfo path={`/${getName}`} />

      <UnknownPage />
    </Switch>
  );
}

export default connect(
  (state) => ({
    getName: getName(state),
  }),
  (dispatch) => ({
  })
)(App);