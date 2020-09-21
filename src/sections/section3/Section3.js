import React from "react";
import "./section3.css";
import tripper from "../../assets/tripper.png";
import link from "../../assets/link.svg";
import github from "../../assets/github2.png";
import brain from "../../assets/brain.svg";

const Scetion3 = () => {
  return (
    <div id="sec3" className="section3">
      <div className="outter1">
        <span
          className="inBox1"
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontWeight: "bolder",
            fontSize: "1.8em",
            marginLeft: "8px",
          }}
        >
          Projects
        </span>
        <div className="inner1">
          <div className="inner2">
            <img alt="" src={tripper} className="black black1" />
            <div className="second">
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontWeight: "bolder",
                  fontSize: "1.8em",
                  marginLeft: "8px",
                }}
              >
                TRIPPER
              </span>
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "1.7em",
                  marginLeft: "9px",
                }}
              >
                All in one solution for trekking enthusiasts all across the
                gorgeous Himachal Pradesh.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="link">
                <a href="https://my-tripper-app.herokuapp.com/" target="_blank">
                  <img alt="" className="link1" src={link} />
                </a>
              </div>
              <div className="Link">
                <a
                  href="https://github.com/Aaditya-Dhanraj/Tripper"
                  target="_blank"
                >
                  <img alt="" className="link1" src={github} />
                </a>
              </div>
            </div>
          </div>
          <div className="inner2 subinner2">
            <div className="besocial">Be-Social</div>
            <div className="second">
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontWeight: "bolder",
                  fontSize: "1.8em",
                  marginLeft: "8px",
                }}
              >
                Be-Social
              </span>
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "1.7em",
                  marginLeft: "9px",
                }}
              >
                A social media website where you can share your memories and
                follow others to see their memories.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="link">
                <a href="" target="_blank">
                  <img alt="" className="link1" src={link} />
                </a>
              </div>
              <div className="Link">
                <a
                  href="https://github.com/Aaditya-Dhanraj/Be-Social-Frontend"
                  target="_blank"
                >
                  <img alt="" className="link1" src={github} />
                </a>
              </div>
            </div>
          </div>
          <div className="inner2 subinner2 subinner3">
            <img alt="" src={brain} className="black2" />
            <div className="second">
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontWeight: "bolder",
                  fontSize: "1.8em",
                  marginLeft: "8px",
                }}
              >
                Face-Detection Bot
              </span>
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "1.7em",
                  marginLeft: "9px",
                }}
              >
                A bot which can detect a face from any photo, it uses an API for
                detecting face.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="link">
                <a href="" target="_blank">
                  <img alt="" className="link1" src={link} />
                </a>
              </div>
              <div className="Link">
                <a
                  href="https://github.com/Aaditya-Dhanraj/Face-Detect-Bot-API"
                  target="_blank"
                >
                  <img alt="" className="link1" src={github} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scetion3;
