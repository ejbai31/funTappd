import React from 'react';
import { Link } from 'react-router-dom';

class UserPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="user-show-page">
        <h3>User Page</h3>
        <div className="user-info">
          <h4>Info</h4>
          <ul className="user-reviews">
          
          </ul>
        </div>
      </div>
    );
  }
}

export default UserPage;