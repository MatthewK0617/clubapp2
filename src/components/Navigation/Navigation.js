import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

import { navigationData } from "./NavigationData";
import { Link } from "@reach/router";
import "./Navigation.css";
import { IconContext } from "react-icons";

const Navigation = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <input
              className="nav-search-area"
              type="text"
              placeholder="Search"
            />
            {/* add on click listener */}

            {navigationData.map((item, i) => {
              return (
                <li key={i} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navigation;
