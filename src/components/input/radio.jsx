/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from "react";
import "./radio.scss";
import PropTypes from "prop-types";
// import $ from "jquery";

const Radio = ({
  name,
  isChecked,
  label,
  type,
  value,
  id,
  placeholder,
  labelText,
  infoText,
  infoClass,
  className,
  validity,
  onChange,
  onFocusOut,
  disabled,
  required,
  options,
}) => (
  <div className={`form-check-radio form-check-inline ${className}`}>
    <input
      className="form-check-radio-input"
      type="radio"
      name={name}
      value={value}
      checked={!isChecked() ? false : isChecked()}
      id={value}
      onChange={(event) => {
        // ;
        onChange(event);
      }}
    />
    <span
      className="form-check-radio-label"
      value={value}
      name={name}
      onClick={(event) => {
        document.getElementById(`${value}`).click();
        onChange(event);
      }}
    >
      <span>{label}</span>
    </span>
  </div>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  infoText: PropTypes.string,
  className: PropTypes.string,
  infoClass: PropTypes.string,
  validity: PropTypes.string,
  onChange: PropTypes.func,
  onFocusOut: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  isChecked: PropTypes.func,
};

export default Radio;
