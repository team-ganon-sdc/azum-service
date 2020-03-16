import React, { Component } from 'react';
import ReviewItem from './reviewItem.jsx';

const ReviewList = function(props) {

  const reviews = props.reviews.map((review) => {
    return <ReviewItem key={review._id} review={review}/>;
  });

  return (
    <div className="review-list">
      <p className="for-testing" ><em>The following are hard-coded elements to represent data</em></p>
      {reviews}
    </div>
  );
};

export default ReviewList;