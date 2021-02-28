import React, { component } from 'react';
import './Navbar.css';
import Logo from './logo.svg';

export class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <img src={Logo} className="logo"/>

        <ul className="nav-links">
          <li><b>My Work</b></li>
          <li><b>About</b></li>
          <li><b>Contact</b></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
