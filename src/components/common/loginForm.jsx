import React, { Component } from "react";
import Input from "./input";
import _ from "lodash";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log(
      "submit funcionality based on result should be redicrected. as per business logic"
    );
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
