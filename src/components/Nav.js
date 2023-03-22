import React from 'react'
import "./Nav.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Notification from './Notification';
import Connect from './Connect';
import You from './You';


const Nav = () => {
    

  return (

<div>
      
<nav className="navbar navbar-light bg-dark">
    <Link as={ Link } exact to="/" className="navbar-brand">
        <img src={require('./images/symbol.png')} />
    </Link>
    <div className="element">
        <ul>
            <li><Link as={ Link } to="/Sign_in"><img src={require('./images/Vector.png')} /></Link></li>
            <li><Link as={ Link } to="/Sign_in"><img src={require('./images/chat.png')}  /></Link></li>
            <li><Link as={Link } to="/Sign_in"><img src={require('./images/Ellipse 1.png')}  /></Link></li>
        </ul>
    </div>
</nav>

    </div>
   
   
   
  )
}

export default Nav
