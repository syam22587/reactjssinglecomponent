import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.lable}</label>
      <input
        id={props.name}
        name={props.name}
        type="text"
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;