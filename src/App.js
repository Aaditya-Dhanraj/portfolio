import React from "react";
import "./App.css";
import Navbar from "./sections/Navbar/Navbar";
import Sec1 from "./sections/section1/section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div id="sec1">
        <Sec1 className="sec" ></Sec1>
      </div>
      <Section2 className="sec" />
      <Section3 className="sec" />
      <Section4 className="sec" />
      
    </div>
  );
}

export default App;
