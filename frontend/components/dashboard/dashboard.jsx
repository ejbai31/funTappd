import React from 'react';
import FavoritesTable from './favorites_table';
import ReviewIndexContainer from '../reviews/review_index_container';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    // console.log(props);
  }

  // componentWillMount(){
  //   this.props.
  // }

  render(){
    // debugger
    return(
      <div className="user-dashboard">

        <div className="sidebar-left">
          <div className="user-card">
            <h1>====USERCARD====</h1>         
            <img className="user-image" src={this.props.user.img_url} alt="USER IMAGE"/>
            {this.props.user.username}
            <div>
              <label htmlFor="">Total Reviews</label>
            </div>
            {/* <FavoritesTable /> */}
          </div>
          <div className ="user-list">
            <h1>====USERLIST====</h1>
            <label htmlFor="">Top Beers</label>
            <ol>
              <li></li>
              <li></li>
              <li></li>
            </ol>
            <label htmlFor="">Top Breweries</label>
            <ol>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
        </div>
        <div className="user-feed">
          <h1>USERFEED</h1>
          <ReviewIndexContainer />
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
// https://ichef.bbci.co.uk/images/ic/720x405/p047z06c.jpg