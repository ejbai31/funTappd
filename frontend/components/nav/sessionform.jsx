import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/dashboard'));
  }

  renderErrors(errors=[]) {
    const display = errors ? (
      <ul>
        {this.props.errors.map((error) => (
          <li>
            {error}
          </li>
        ))} 
      </ul>
  ) : (
    <ul>""</ul>
  );
  return display;
  }

  // const display = all_ids ? (
  //   all_ids.map(id =>
  //     <FeedIndexItemContainer
  //       key={id}
  //       post={by_id[id]}
  //       user={users[by_id[id].author_id]} />)
  // ) : (
  //     <div></div>
  //   );

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-form">
            <label>Username:     
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <label>Password:    
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <input type="submit" value="Login" />
          </div>
        </form>
        <span className="errors">
          {this.renderErrors()}
        </span>
      </div>
    );
  }
}

export default withRouter(SessionForm);