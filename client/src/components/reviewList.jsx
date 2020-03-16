import React, { Component } from 'react';
import ReviewItem from './reviewItem.jsx';

const ReviewList = function(props) {

  const reviews = props.reviews.map((review) => {
    return <ReviewItem key={review._id} review={review}/>;
  });

  return (
    <div className="review-list">
      {reviews}
    </div>
  );
};

export default ReviewList;