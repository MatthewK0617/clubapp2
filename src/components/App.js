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
// import { ddata } from "./DirectoryData";
import MoreInfo from "./MoreInfo";
import AppContext from "./AppContext";

import firebase from "firebase";
// import { getDatabase, ref, onValue} from "firebase/database";

function App() {

  // const user = useContext(UserContext);

  let [index, setIndex] = React.useState(0);
  let [clubs, setClubs] = React.useState([]);

  var clubsRef = firebase.firestore().collection("Schools").doc("EW2jhaZEnRT3XA2Q4KF8").collection("Clubs");
  clubsRef.get().then(function (snapshot) {
    let data1 = [];

    snapshot.forEach(function (childSnapshot) {
      let id = childSnapshot.id;
      let data = childSnapshot.data();

      data1.push({ id: id, name: data.name, description: data.description });
    });
    setClubs(data1);
  });

  return (
    <AppContext.Provider
      value={{
        index: index,
        setIndex: setIndex,
        clubs: clubs,
        setClubs: setClubs,
      }}
    >
      <Router>
        <Main path="/main" />
        <SignUp path="signUp" />
        <FrontPage path="/" />
        <SignIn path="/signIn" />
        <PasswordReset path="passwordReset" />
        <Directory path="/directory" />
        {clubs.map((data) => (
          <MoreInfo path="/test" />
        ))}
      </Router>
    </AppContext.Provider>
  );
}

export default App;
