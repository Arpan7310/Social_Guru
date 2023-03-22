import React from "react";
import "./Nav.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Notification_Emp from "./Notification_Emp";
import You_Emp from "./You_Emp";
import Connect_Emp from "./Connect_Emp";

const Nav_Experts = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <Link as={Link} exact to="/" className="navbar-brand">
          <img src={require("./images/symbol.png")} />
        </Link>
        <div className="element">
          <ul>
            <li>
              <Link as={Link} to="/Notification_Emp">
                <img src={require("./images/Vector.png")} />
              </Link>
            </li>
            <li>
              <Link as={Link} to="/Applied">
                <img src={require("./images/chat.png")} />
              </Link>
            </li>
            <li>
              <Link as={Link} to="/You_Emp">
                <img src={require("./images/Ellipse 1.png")} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav_Experts;
