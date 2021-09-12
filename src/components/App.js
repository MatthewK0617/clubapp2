import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
// import userProvider, { UserContext } from "../providers/UserProvider";
import Directory from "./Directory";
import FrontPage from "./FrontPage";
import { directoryData } from "./DirectoryData";
import MoreInfo from "./MoreInfo";
import AppContext from "./AppContext";

function App() {
  // const user = useContext(UserContext);
  let [index, setIndex] = React.useState(0);
  let [data, setData] = React.useState(directoryData);


  return (
    <AppContext.Provider value={{index: index, setIndex: setIndex, data: data, setData: setData}}>
      <Router>
        <Main path="/main" />
        <SignUp path="signUp" />
        <FrontPage path="/" />
        <SignIn path="/signIn" />
        <PasswordReset path="passwordReset" />
        <Directory path="/directory" />
        {directoryData.map((data) => (
          <MoreInfo path="/test" />
        ))}
      </Router>
    </AppContext.Provider>
  );
}

export default App;
