import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validate = () => {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "") errors.username = "Username required ";
    if (account.password.trim() === "") errors.password = "Password required ";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log("erros", errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  validateProperty = input => {
    console.log("validate proper");
    if (input.name === "username") {
      if (input.value.trim() === "")
        return "Username is required from onchange ";
    }

    if (input.name === "password") {
      if (input.value.trim() === "")
        return "Password is required from onchange ";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      console.log("asdfasfasfsf", errorMessage);
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    // the below line ensures input values are in sync with inputs own state
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            lable="Username"
            value={account.username}
            error={errors.username}
          />
          <Input
            onChange={this.handleChange}
            name="password"
            lable="Password"
            value={account.password}
            error={errors.password}
          />

          <button className="btn-primary btn">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
