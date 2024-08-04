import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isdisabledd }) {
  return (
    <button type={type} disabled={isdisabledd} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isdisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isdisabledd: PropTypes.bool,
};
export default Button;
