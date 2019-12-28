import React from "react";

// instead of props passing, we are using object destructuring
const Input = ({ name, label, value, onChange, type = "text", error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
      {/*
      // this is old representation . The below is modified with above new 
      // representation using {...rest}
      <input
        id={name}
        name={name}
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      /> */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
