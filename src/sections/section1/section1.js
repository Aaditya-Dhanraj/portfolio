import React, { Component } from "react";
import Floater from "../../animations/floating";
import pic1 from "../../assets/Aaditya.svg";
import github from "../../assets/github.svg";
import linkdin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import cv from "../../assets/cv.svg";

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
            <div>
              <div className="flex hello">
                <span
                  className="mono"
                  style={{ paddingRight: "8px", paddingTop: "5px" }}
                >
                  Hello! I am
                </span>
                <span className="monoL">Aaditya Dhanraj</span>
              </div>
            </div>
            <div>
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
                <div
                  id="myElement"
                  className="left"
                  style={{
                    fontFamily: "Times New Roman, Times, serif",
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "1.5em",
                  }}
                ></div>
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
            </div>
            <div>
              <div className="social">
                <a href="https://github.com/Aaditya-Dhanraj" target="_blank">
                  <img alt="" className="socialicon" src={github} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aaditya-dhanraj/"
                  target="_blank"
                >
                  <img alt="" className="socialicon" src={linkdin} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1bpuCq-YU2v8BevGWQOmbbOUxSmYRgl24/view?usp=sharing"
                  target="_blank"
                >
                  <img alt="" className="cv" src={cv} />
                </a>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div>
              <Floater>
                <img alt="" className="ill" src={pic1} />
              </Floater>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sec1;
