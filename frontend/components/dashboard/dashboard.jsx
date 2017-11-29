import React from 'react';
import FavoritesTable from './favorites_table';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    // console.log(props);
  }

  // componentWillMount(){
  //   this.props.
  // }

  render(){
    return(
      <div className="user-dashboard">
      
        <div className="sidebar-left">
          <div className="user-card">
            <h1>====USERCARD====</h1>         
            <img className="user-image" alt="USER IMAGE"/>
            {this.props.user.username}
            {/* <FavoritesTable /> */}
          </div>
          <div className ="user-list">
            <h1>====USERLIST====</h1>
          </div>
        </div>
        <div className="user-feed">
          <h1>USERFEED</h1>
        </div>
        
      </div>
    );
  }

}

export default Dashboard;


// export default () =>
// (<div>
//   THE FEEEEEEEEEEEEEEEEEEEEED
// </div>);