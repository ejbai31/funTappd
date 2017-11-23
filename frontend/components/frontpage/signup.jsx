import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  handleInputChange(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length > 0 &&
      newProps.errors[0].responseJSON[0] !== "Invalid Username or Password") {
      this.setState({
        errors: newProps.errors[0].responseJSON.map((error, index) => {
          return (
            <span key={index}>{error}</span>
          );
        })
      });
    }
  }

  renderErrors() {
    return (
      <div id="signup-errors">
        {this.state.errors}
      </div>
    );
  }

  removeErrors() {
    setTimeout(() => {
      this.setState({ errors: "" });
    }, 2000);
  }

  render() {
    if (this.state.errors) {
      this.removeErrors();
    }
    return (
      <form onSubmit={this.handleSubmit} id="signup-form">
        <h1> Create a New Account </h1>

        <div>
          <input type="text" className="signup-form-username"
            onChange={this.handleInputChange('username')}
            defaultValue="username">
          </input>
        </div>

        <input type="text"
          onChange={this.handleInputChange('password')}
          defaultValue="password">
          </input>
        <button>Create Account</button>

        {this.state.errors ? this.renderErrors() : ""}
      </form>
    );
  }
}

export default Signup;