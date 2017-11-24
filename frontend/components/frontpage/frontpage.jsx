import React from 'react';
import Signup from './signup';
import Login from './login';

class Frontpage extends React.Component {
  componentDidMount(){
  }
  render() {
    
    return (
      <div id="frontpage">
        <div id="desc-left">
          <h2>JOIN FUNTAPPD RIGHT NOW</h2>
        </div>
        <div id="form-right">
          <Signup signup={this.props.signup}
            errors={this.props.errors} 
            history={this.props.history}
            />
        </div>
      </div>
    );
  }
}


export default Frontpage;