import React from 'react';
import { Link } from 'react-router-dom';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteReview() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const review = this.props.review;
    let reviewImage = null;
    if (review.img_url !== review.img_url) {
      reviewImage = <img className='review-image' src={review.image_url} />;
    }
    if(review.id === undefined){
      return null;
    }else{
      return (
        <div className='review-index-item'>
          <div className="review-index-item-top">
            <img className="review-user-img" src="https://res.cloudinary.com/ejbai31/image/upload/v1512376920/default-user_dqm6tz.png" />
            <Link className='user-link' to={`/users/${review.user_id}`}>{review.user}</Link>
            <p> had a </p>
            <Link className='beer-link' to={`/bottles/${review.beer_id}`}>{review.beer}</Link>
            <br />
          </div>
          {"Brewery: "}{review.brewery}
          <br />
          <div className='review-comment'>
            <h3>{review.review}</h3>
          </div>
          {reviewImage}
          {/* <img className='review-icon' src={review.img_url} /> */}
          <h4>{review.time_ago} ago</h4>
          {/* TODO 1: ADD EDIT BUTTON IF USER ID MATCHES AUTHOR ID */}
          {/* FORMAT BOXES TO ALIGN FROM THE LEFT */}
        </div>
      );
    } 
  }
}
export default ReviewItem;