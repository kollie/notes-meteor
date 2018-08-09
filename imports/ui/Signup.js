import React from "react";
import { Link } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import { withTracker } from "meteor/react-meteor-data";
import propTypes from "prop-types";

export class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 8) {
      return this.setState({ error: "Password must be at least 8 characters" });
    }

    this.props.createUser({ email, password }, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.setState({
          error: ""
        });
      }
    });

    // this.setState({
    //   error: "Something went wrong"
    // });
  };

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form
            onSubmit={this.onSubmit}
            noValidate
            className="boxed-view__form"
          >
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
            <button className="button">Create Accont</button>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    );
  }
}

Signup.prototype = {
  createUser: propTypes.func.isRequired
};

export default withTracker(() => {
  return {
    createUser: Accounts.createUser
  };
})(Signup);
