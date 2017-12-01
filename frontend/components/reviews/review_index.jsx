import React from 'react';
import ReviewItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getReviews();
  }

  render() {
    const reviews = this.props.reviews;
    if (!reviews) {
      return null;
    }

    return (
      <ul className='review-feed'>
        <h1 className='review-text'>Reviews</h1>
        {Object.keys(reviews).reverse().map((key) => {
          let review = reviews[key];
          return (
            <ReviewItem
              review={review}
              deleteReview={this.props.deleteReview}
              toDelete={review.user_id === this.props.userId}
              key={key} />
          );
        })}
      </ul>
    );
  }
}

export default ReviewIndex;