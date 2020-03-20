import React, { Component } from 'react';
import ReviewItem from './reviewItem.jsx';

const ReviewList = function(props) {

  const reviews = props.reviews.map((review) => {
    return <ReviewItem key={review._id} review={review}/>;
  });

  if (!reviews.length) {
    reviews.push(
      <p key="empty" className="empty-message">Sorry, It doesn't seem like there are any reviews.</p>
    );
  }

  return (
    <div className="review-list">
      {reviews}
    </div>
  );
};

export default ReviewList;