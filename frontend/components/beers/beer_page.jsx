import React from 'react';
import { Link } from 'react-router-dom';

class BeerPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="beer-show-page">
        {/* Add beer name to top of page */}
        <h3>Beer Page</h3> 
        <div className="beer-info">
        {/* beer stats here */}
        </div>
      </div>
    );
  }
}

export default BeerPage;