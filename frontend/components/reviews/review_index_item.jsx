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
    // let deleteButton = "";
    // if (this.props.toDelete) {
    //   deleteButton = (
    //     <button onClick={this.deleteReview.bind(this)}
    //       className='delete-review'>Delete Review</button>
    // }

    return (
      <div className='review-index-item'>
        <Link className='user-link' to={`/users/${review.user_id}`}>{review.user}</Link>
        {" had a"}
          <br />
          <Link className='beer-link' to={`/bottles/${review.beer_id}`}>{review.beer}</Link>
          <br />
          {"Brewery: "}{review.brewery}
          <br />
        <div className='review-comment'>
          <h3>{review.comment}</h3>
        </div>
        {reviewImage}
        <img className='review-icon' src={review.img_url} />
        <h4>{review.time_ago} ago</h4>
      </div>
    );
  }
}
export default ReviewItem;