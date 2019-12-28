import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted.");
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="username"
            lable="Username"
            value={account.username}
          />
          <Input
            onChange={this.handleChange}
            name="password"
            lable="Password"
            value={account.password}
          />

          <button className="btn-primary btn">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
