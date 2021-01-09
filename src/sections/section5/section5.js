import React from "react";
import "./section5.css";
import avanzar from "../../assets/avanzarhealth.png";
import link from "../../assets/link.svg";
import linkdin from "../../assets/linkedin.svg";

const Scetion5 = (props) => {
  return (
    <div id="sec1" className="section3">
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
          Experience
        </span>
        <div className="inner1">
          <div className="inner2">
            <img
              alt=""
              src={avanzar}
              style={{
                marginTop: "20px",
                justifyContent: "center",
                alignItems: "center",
                width: "110px",
                marginLeft:"5px"
              }}
              className={props.dark ? "black1" : null}
              loading="lazy"
            />
            <div className="second">
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontWeight: "bolder",
                  fontSize: "1.5em",
                  marginLeft: "8px",
                }}
              >
                React Developer
              </span>
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "1.5em",
                  marginLeft: "9px",
                }}
              >
                Avanzar Tech.
              </span>
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "1.3em",
                  marginLeft: "9px",
                }}
              >
                Internship
              </span>
              <span
                style={{
                  fontFamily: "Times New Roman, Times, serif",
                  fontSize: "1.3em",
                  marginLeft: "9px",
                }}
              >
                3 Months
              </span>
            </div>
            <div
              style={{
                width: "200%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                
              }}
            >
              <div
                style={{
                  width:"60vw",
                  marginLeft: "15%",
                  display: "flex",
                  flexDirection: "column",
                  fontSize:"1.0em",
                  fontWeight:"600",
                }}
              >
                <div style={{display:"flex",marginTop:"5px"}}>
                <div style={{marginRight:"5px"}}>1.</div>
                <div>Frontend UI development for web-based and mobile app</div>
                </div>
                <div style={{display:"flex",marginTop:"5px"}}>
                <div style={{marginRight:"5px"}}>2.</div>
                <div>Developed a web app frontend and backend for keep track and organise data with ton of extra features</div>
                </div>
                <div style={{display:"flex",marginTop:"5px"}}>
                <div style={{marginRight:"5px"}}>3.</div>
                <div>Creating and intigrating APIs</div>
                </div>
                <div style={{display:"flex",marginTop:"5px"}}>
                <div style={{marginRight:"5px"}}>4.</div>
                <div>Bug fixing</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="link">
                  <a href="https://avanzarhealth.com/" target="_blank">
                    <img alt="" className="link1" src={link} loading="lazy" />
                  </a>
                </div>
                <div className="Link">
                  <a
                    href="https://www.linkedin.com/company/avanzar-health/about/"
                    target="_blank"
                  >
                    <img
                      alt=""
                      className="link1"
                      src={linkdin}
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scetion5;
