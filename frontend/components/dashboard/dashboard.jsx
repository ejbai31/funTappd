import React from 'react';
import FavoritesTable from './favorites_table';
import ReviewIndexContainer from '../reviews/review_index_container';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="user-dashboard">

        <div className="sidebar-left">
          <div className="user-card">
            <h1>User Info</h1>         
            <img className="user-image" src="https://res.cloudinary.com/ejbai31/image/upload/v1512376920/default-user_dqm6tz.png" alt="USER IMAGE"/>
            {'User:'} {this.props.user.username}
            <div>
              <label className="total-reviews">Total Reviews: 13</label>
            </div>
          </div>
          <div className ="user-list">
            <h1>User Toplist</h1>
            <label htmlFor="">Top Beers</label>
            <ol>
              <li>Stone IPA</li>
              <li>Oblate</li>
              <li>Pranqster</li>
            </ol>
            <label htmlFor="">Top Breweries</label>
            <ol>
              <li>Monkish</li>
              <li>Golden Road</li>
              <li>The Dudes</li>
            </ol>
          </div>
        </div>
        <div className="user-feed">
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
// "https://ichef.bbci.co.uk/images/ic/720x405/p047z06c.jpg"