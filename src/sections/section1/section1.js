import React, { Component } from "react";
import Parallax from "react-rellax";
import Floater from "../../animations/floating";
import pic1 from "../../assets/Aaditya.svg";
import github from "../../assets/github.svg";
import linkdin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import "./section1.css";
import { init } from "ityped";

class Sec1 extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: ["Frontend", "Backend", "Fullstack"],
    });
  }
  render() {
    return (
      <div className="parent1">
        <div className="section1">
          <div className="left-side ">
            <Parallax speed={7}>
              <div className="flex hello">
                <span
                  className="mono"
                  style={{ paddingRight: "8px", paddingTop: "5px" }}
                >
                  Hello! I am
                </span>
                <span className="monoL">Aaditya Dhanraj</span>
              </div>
            </Parallax>
            <Parallax speed={5}>
              <div className="flex">
                <span
                  style={{
                    fontFamily: "Times New Roman, Times, serif",
                    fontWeight: "bolder",
                    fontSize: "1.5em",
                    marginRight: "6px",
                    width: "fitContent",
                  }}
                >
                  I am a
                </span>
                <div id="myElement"
                  className="left"
                  style={{
                    fontFamily: "Times New Roman, Times, serif",
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "1.5em",
                  }} >
                 
                  </div>
                <span
                  style={{
                    fontFamily: "Times New Roman, Times, serif",
                    fontWeight: "bolder",
                    fontSize: "1.5em",
                    marginLeft: "6px",
                  }}
                >
                  Developer
                </span>
              </div>
            </Parallax>
            <Parallax>
              <div className="social">
                <a href="https://github.com/Aaditya-Dhanraj" target="_blank">
                  <img alt="" className="socialicon" src={github} />
                </a>
                <a href="https://www.google.com" target="_blank">
                  <img alt="" className="socialicon" src={linkdin} />
                </a>
                <a
                  href="https://www.instagram.com/its_aditude/"
                  target="_blank"
                >
                  <img alt="" className="socialicon" src={instagram} />
                </a>
              </div>
            </Parallax>
          </div>
          <div className="right-side">
            <Parallax speed={-2.5}>
              <Floater>
                <img alt="" className="ill" src={pic1} />
              </Floater>
            </Parallax>
          </div>
        </div>
      </div>
    );
  }
}

export default Sec1;