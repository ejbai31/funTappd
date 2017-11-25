import React from 'react';
import Signup from './signup';
import Login from './login';

class Frontpage extends React.Component {
  componentDidMount(){
  }
  render() {
    
    return (
      <div className="frontpage">
        <div className="desc-left">
          <h2>JOIN FUNTAPPD RIGHT NOW</h2>
          <p>Rate your favorite beers and breweries! Share with friends!</p>
        </div>
        <div className="form-right">
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