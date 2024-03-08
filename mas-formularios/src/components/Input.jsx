import React from "react";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  err,
}) => {
  return (
    <div className="mb-3">

      <label htmlFor={name} className="form-label">
        {label}
      </label>
      
      <input
        type={type}
        name={name}
        className="form-control"
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoComplete={"off"}
      />
      {err ? <p className="mt-2">{err}</p> : ""}
    </div>
  );
};

export default Input;
