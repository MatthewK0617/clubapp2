import React from "react";
import { Link } from "@reach/router";

function Main({ user }) {
  return (
    <div>
      <h1 className="header">Hello</h1>
      <Link to="/">Sign In</Link>
      <Link to="/signUp">Sign Up</Link>
      <div>
          hello {user}
      </div>
    </div>
  );
}

export default Main;
