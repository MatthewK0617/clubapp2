import React from "react";
import { Link, Router } from "@reach/router";
// import { directoryData } from "./DirectoryData";
import "./MoreInfo.css";
import AppContext from "./AppContext";

function MoreInfo() {
  let { index, setIndex, clubs, setClubs } = React.useContext(AppContext);

  return (
    <div className="moreinfo-container">
      <h1 className="name">{clubs[index].name}</h1>
      <body className="description">{clubs[index].description}</body>
      {/* {directoryData[index].id} */}

      <div className="button-wrapper">
        <div className="collaborate-button" onClick>
          Collaborate
        </div>
        <div className="directory-button">
          <Link to="/directory">Directory</Link>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
