import React from "react";
import "./section2.css";

const Section2 = () => {
  return (
    <div id="sec2" className="section2">
      <div className="outter">
        <span
          className="inBox"
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontWeight: "bolder",
            fontSize: "1.8em",
            marginLeft: "8px",
          }}
        >
          Technology Stack
        </span>
        <div className="inner">
          <div className="meter">
            <span className="name">HTML5</span>
            <div className="value ">
              <div className="value1"></div>
            </div>
          </div>
          <div className="meter">
            <span className="name">CSS3</span>
            <div className="value">
              <div className="value2"></div>
            </div>
          </div>
          <div className="meter">
            <span className="name">JavaScript</span>
            <div className="value ">
              <div className="value3"></div>
            </div>
          </div>
          <div className="meter">
            <span className="name">React</span>
            <div className="value ">
              <div className="value4"></div>
            </div>
          </div>
          <div className="meter">
            <span className="name">Node</span>
            <div className="value ">
              <div className="value5"></div>
            </div>
          </div>
          <div className="meter">
            <span className="name">Express</span>
            <div className="value ">
              <div className="value6"></div>
            </div>
          </div>
          <div className="meter">
            <span className="name">MongoDB</span>
            <div className="value ">
              <div className="value7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
