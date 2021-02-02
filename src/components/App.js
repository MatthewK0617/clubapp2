import React, {useContext} from "react";
import "./App.css";
import { Router } from "@reach/router";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import userProvider, { UserContext } from "../providers/UserProvider";
import Directory from "./Directory";

function App() {
  const user = useContext(UserContext);
  return (
    user ? 
    <ProfilePage />
  : 
    <Router>
      <Main path="/main" />
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
      <Directory path="directory" />
    </Router>
  );
}

export default App;
