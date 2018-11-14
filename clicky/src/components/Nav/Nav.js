import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="container">
  <nav className="navbar-fluid fixed-top navbar-expand-lg navbar-dark">
    <a className="navbar-brand js-scroll-trigger" href="Clicky-Game">
    {props.title}
    </a>
    <h1 id="NavTitle">Vegetable Click Memory Game</h1>
    <ul className="navbar-nav  justify-content-end text-uppercase">
      <li className="nav-item" id="winner">{props.winner}</li>
      <li className="nav-item" id="current-score">Current Score: {props.score}</li>
      <li className="nav-item" id="high-score">High Score: {props.topScore}</li>
    </ul>
  </nav>
  
  </div>
);

export default Nav;

