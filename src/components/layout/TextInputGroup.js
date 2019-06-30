import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
  error,
  onKeyPress
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames("form-control form-control-sm", {
          "is-invalid": error
        })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};
TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
