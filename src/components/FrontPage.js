import React from "react";
import { Link } from "@reach/router";

function FrontPage() {
  return (
    <div>
      <h1 className="header">Hello</h1>
      <Link to="/">Sign In</Link>
      <Link to="/signUp">Sign Up</Link>
      <div>
          hello 
      </div>
      <Link to="/directory">Directory</Link>
    </div>
  );
}

export default FrontPage;
