import React, { Component } from 'react';

const ReviewItem = function(props) {
  const review = props.review;
  return (
    <div className="review-item">
      <p>{review.author}</p>
      <p>{review.rating}</p>
      <p>{review.body}</p>
      <p>Likes: {review.likes}</p>
    </div>
  );
};

export default ReviewItem;