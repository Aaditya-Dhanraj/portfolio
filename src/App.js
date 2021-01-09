import React, { Component } from "react";
import "./App.css";
import Navbar from "./sections/Navbar/Navbar";
import Sec1 from "./sections/section1/section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/section5";

class App extends Component {
  state = {
    dark: false,
  };

  render() {
    return (
      <div
        style={{ transitionDuration: "2s" }}
        className={this.state.dark ? "dark" : null}
      >
        <div>
          <div
            className="btnTop"
            onClick={() =>
              this.setState({
                dark: !this.state.dark,
              })
            }
          >
            {this.state.dark ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
        <Navbar></Navbar>
        <div id="sec0">
          <Sec1 className="sec"></Sec1>
        </div>
        <Section5 dark={this.state.dark} className="sec" />
        <Section2 className="sec" />
        <Section3 className="sec" />
        <Section4 className="sec" />
      </div>
    );
  }
}

export default App;
