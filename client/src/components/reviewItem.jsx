import React, { Component } from 'react';

const ReviewItem = function(props) {
  const review = props.review;

  // Creates a string for rating withstars instead of numbers

  return (
    <div className="review-item">
      <div className="row">
        <div className="col-sm-2 author-image">
          <p className="circle">{review.author[0]}</p>
        </div>

        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-8">
              <p className="review-item-author">{review.author}</p>
              <p className="review-item-rating">{review.rating}</p>
            </div>
            <p className="review-item-likes col-sm-4">Likes: {review.likes}</p>
          </div>
          <p className="review-item-body">{review.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;