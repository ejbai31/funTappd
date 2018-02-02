import React from 'react';
import BeerReviewItem from './beer_review_item';
import { Link } from 'react-router-dom';

class BeerReview extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // review foreign key logic here ****
    // add logic for edit button being available if it is own review
    return(
      <ul className = 'beer-review-index'>
        <h1></h1>
        <div>
          <BeerReviewItem
            
            // name, pic, rating, text review (opt)
            // load only 10 different reviews at a time
          />
        </div>
      </ul>
    );
  }


}

export default BeerReview;