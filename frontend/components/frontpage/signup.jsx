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

  
  renderErrors(errors) {
    let display = <ul></ul>;
    if (this.props.errors) {
      display = this.props.errors.map((error) => (
        <li>
          {error}
        </li>
      ));
    }

    return display;
  }


  render() {
 
    return (
      <div className="sign-up">
        <form onSubmit={this.handleSubmit} id="signup-form">
          <h2>Create a New Account</h2>

          <label>Username:
            <input 
              type="text" 
              className="signup-form-username"
              onChange={this.handleInputChange('username')}
              placeholder="username">
            </input>
          </label>
          <label>Password:
            <input 
              type="password"
              className = "signup-form-password"
              onChange={this.handleInputChange('password')}
              placeholder="password">
            </input>
          </label>
          <button>Create Account</button>

          <span className="errors">
            {this.renderErrors()}
          </span>
        </form>
      </div>
    );
  }
}

export default Signup;