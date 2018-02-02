import React from 'react';
import { Link } from 'react-router-dom';

class BeerReviewItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h3>Beer Reviews</h3>
        <ul className="beer-reviews">
        {/* 
        add props thru reducer
        actions
        jbuilder
         */}
        </ul>
      </div>
    );
  }
}

export default BeerReviewItem;