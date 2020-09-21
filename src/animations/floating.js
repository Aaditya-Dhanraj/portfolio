import React from "react";
import "./floating.css";

const Floater = (props) => {
  return <div className="floating">{props.children}</div>;
};

export default Floater;
