import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
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
      <div id="login-errors">
        {this.state.errors}
      </div>
    );
  }

  render() {
    if (this.state.errors) {
      this.removeErrors();
    }
    return (
      <form onSubmit={this.handleSubmit} id="login-form">
        <h1> Login </h1>

        <div>
          <input type="text" className="login-form-username"
            onChange={this.handleInputChange('username')}
            defaultValue="username">
          </input>
        </div>

        <input type="text"
          onChange={this.handleInputChange('password')}
          defaultValue="password">
        </input>
        <button>Login</button>

        {this.state.errors ? this.renderErrors() : ""}
      </form>
    );
  }
}

export default Login;