import React from "react";
import cx from "classnames";
import "./_background.scss";

const Background = () => (
  <div className="Background Background--vaporwave">
    <div className="vaporwave-gradient" />
    <div className="scan-lines" />
    <div className="grid-lines" />
  </div>
);

export default Background;