import React from "react";
import PropTypes from "prop-types";

function header(bgcolor, textcolor) {
  const styling = {
    backgroundColor: bgcolor,
    color: textcolor,
  };
  return (
    <div style={{ background: "red", color: "rgba(40,0,50,1)" }}>
      <div className="container">
        <h1>Feedback Application</h1>
      </div>
    </div>
  );
}
header.prototype = {
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
};
export default header;
