import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {
    activelink: true,
    activelink2: false,
    activelink3: false,
    activelink4: false,
  };

  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a
          href="#sec1"
          className={this.state.activelink ? "selected" : null}
          onClick={() =>
            this.setState({
              activelink: true,
              activelink2: false,
              activelink3: false,
              activelink4: false,
            })
          }
        >
          <span>Me!</span>
        </a>
        <a
          href="#sec2"
          className={this.state.activelink2 ? "selected" : null}
          onClick={() =>
            this.setState({
              activelink: false,
              activelink2: true,
              activelink3: false,
              activelink4: false,
            })
          }
        >
          <span>Skills</span>
        </a>
        <a
          href="#sec3"
          className={this.state.activelink3 ? "selected" : null}
          onClick={() =>
            this.setState({
              activelink: false,
              activelink2: false,
              activelink3: true,
              activelink4: false,
            })
          }
        >
          <span>Projects</span>
        </a>
        <a
          href="#sec4"
          className={this.state.activelink4 ? "selected" : null}
          onClick={() =>
            this.setState({
              activelink: false,
              activelink2: false,
              activelink3: false,
              activelink4: true,
            })
          }
        >
          <span>Contact</span>
        </a>
      </div>
    );
  }
}

export default Navbar;