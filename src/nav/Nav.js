import react, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>Portfolio</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  }
}
