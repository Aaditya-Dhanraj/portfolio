import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  state = {
    active1: false,
    active2: false,
    active3: false,
    active4: false,
  };

  isInViewport = () => {
    let sec0 = document.getElementById("sec0").getBoundingClientRect().top;
    let sec1 = document.getElementById("sec1").getBoundingClientRect().top;
    let sec2 = document.getElementById("sec2").getBoundingClientRect().top;
    let sec3 = document.getElementById("sec3").getBoundingClientRect().top;
    let sec4 = document.getElementById("sec4").getBoundingClientRect().top;
    let height = -1 * window.innerHeight;
    // console.log(height);
    if (sec0 <= 15 && sec0 > height) {
      this.setState({
        active1: false,
        active2: false,
        active3: false,
        active4: false,
      });
    } else if (sec1 <= 15 && sec1 > height) {
      this.setState({
        active1: true,
        active2: false,
        active3: false,
        active4: false,
      });
    } else if (sec2 <= 15 && sec2 > height) {
      this.setState({
        active1: false,
        active2: true,
        active3: false,
        active4: false,
      });
    } else if (sec3 <= 15 && sec3 > height) {
      this.setState({
        active1: false,
        active2: false,
        active3: true,
        active4: false,
      });
    } else if (sec4 <= 70) {
      this.setState({
        active1: false,
        active2: false,
        active3: false,
        active4: true,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.isInViewport);
  }
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a href="#sec1" className={this.state.active1 ? "selected" : null}>
          <span>Experience</span>
        </a>
        <a href="#sec2" className={this.state.active2 ? "selected" : null}>
          <span>Skills</span>
        </a>
        <a href="#sec3" className={this.state.active3 ? "selected" : null}>
          <span>Projects</span>
        </a>
        <a href="#sec4" className={this.state.active4 ? "selected" : null}>
          <span>Contact</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
