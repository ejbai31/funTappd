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
      </div>
    );
  }
}

export default UserPage;