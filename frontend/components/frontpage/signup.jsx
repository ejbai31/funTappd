import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/dashboard'));
  }

  handleInputChange(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
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
      <div className="sign-up">
        <form onSubmit={this.handleSubmit} id="signup-form">
          <h2>Create a New Account</h2>

          <label>Username:
            <input 
              type="text" 
              className="signup-form-username"
              onChange={this.handleInputChange('username')}
              defaultValue="username">
            </input>
          </label>
          <label>Password:
            <input 
              type="password"
              className = "signup-form-password"
              onChange={this.handleInputChange('password')}
              defaultValue="password">
            </input>
          </label>
          <button>Create Account</button>

          {this.state.errors ? this.renderErrors() : ""}
        </form>
      </div>
    );
  }
}

export default Signup;