import React from 'react';
import Signup from './signup';
import Login from './login';

class Frontpage extends React.Component {
  componentDidMount(){
  }
  render() {
    
    return (
      <div id="page">
        <header>
          <Login />
        </header>
        <div id="desc-left">
          JOIN FUNTAPPD RIGHT NOW
        </div>
        <Signup signup={this.props.signup}
          errors={this.props.errors} />
      </div>
    );
  }
}


export default Frontpage;