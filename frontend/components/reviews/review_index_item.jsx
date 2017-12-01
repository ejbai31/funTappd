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
    if (review.drink_image !== review.image_url) {
      reviewImage = <img className='review-image' src={review.image_url} />;
    }
    let deleteButton = null;
    if (this.props.toDelete) {
      deleteButton = (
        <button onClick={this.deleteReview.bind(this)}
          className='delete-review'>Delete Review</button>
      );
    }

    return (
      <div className='review-index-item'>
        <h2><Link className='review-link' to={`/users/${review.user_id}`}>{review.user}</Link>
          <Link className='review-link' to={`/bottles/${review.drink_id}`}>{review.drink}</Link>
          {review.brewery}</h2>
        <div className='review-comment'>
          <h3>{review.comment}</h3>
        </div>
        {deleteButton}
        {reviewImage}
        <img className='review-icon' src={review.drink_image} />
        <h4>{review.time_ago} ago</h4>
      </div>
    );
  }
}
export default ReviewItem;