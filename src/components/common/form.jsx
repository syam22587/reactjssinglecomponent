import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;
    console.log("result", result);
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message; // _.escape(item.message);
    return errors;

    //The below code is actually the customer validation logic. this is replaced by JOI APi validation logic
    /* { `${description}` }
    console.log("result", result);
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "") errors.username = "Username required ";
    if (account.password.trim() === "") errors.password = "Password required ";
    return Object.keys(errors).length === 0 ? null : errors; */
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // [name] indicates the dynamic naming consideration
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // the bleow code is a wague one as we have to repeat this for each
    // and every input filed. So we use JOI validation for onchange action
    /*if (input.name === "username") {
      if (input.value.trim() === "")
        return "Username is required from onchange ";
    }

    if (input.name === "password") {
      if (input.value.trim() === "")
        return "Password is required from onchange ";
    } */
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log("erros", errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      console.log("asdfasfasfsf", errorMessage);
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    // the below line ensures input values are in sync with inputs own state
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type) => {
    return (
      <Input
        type={type}
        onChange={this.handleChange}
        name={name}
        label={label}
        value={this.state.data[name]}
        error={this.state.errors[name]}
      />
    );
  };

  // render button method
  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn-primary btn">
        {label}
      </button>
    );
  };
}

export default Form;
