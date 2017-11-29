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
          <h2>Join funTappd!</h2>
          <p>Rate and share your favorite beers and breweries!
            <br/>
            Discover new beers and breweries! 
            <br/>
          </p>
          <p className="accent-text">
          <br/>
          All for free!</p>
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