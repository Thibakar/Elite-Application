import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const Button1 = ({ name, disabled, onClick, classes }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`btn text-white text-uppercase button-primary custom-style ${classes}`}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

Button1.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.string
};

export default Button1;
