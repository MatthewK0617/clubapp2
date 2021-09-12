import React, { useContext } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import userProvider, { UserContext } from "../providers/UserProvider";
import Directory from "./directory";
import FrontPage from "./FrontPage";

function App() {
  const user = useContext(UserContext);
  return (
    <Router>
      <Main path="/main" />
      <SignUp path="signUp" />
      <FrontPage path="/" />
      <SignIn path="/signIn" />
      <PasswordReset path="passwordReset" />
      <Directory path="/directory" />
    </Router>
  );
}

// export default App;
