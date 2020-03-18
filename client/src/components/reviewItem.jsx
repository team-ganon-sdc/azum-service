import React, { Component } from 'react';

const ReviewItem = function(props) {
  const review = props.review;

  const stars = [];
  if (review.rating % 2) {
    let numbStars = (review.rating - 1) / 2;
    for (let i = 0; i < numbStars; i++) {
      stars.push(<i key={i} className="icon-star"></i>);
    }
    stars.push(<i key="half-empty" className="icon-star-half-empty"></i>);
  } else {
    let numbStars = (review.rating - 1) / 2;
    for (let i = 0; i < numbStars; i++) {
      stars.push(<i key={i} className="icon-star"></i>);
    }
  }

  return (
    <div className="review-item">
      <div className="row">
        <div className="col-sm-1 author-image">
          <p className="circle">{review.author[0]}</p>
        </div>

        <div className="col-sm-11">
          <div className="row">
            <div className="col-sm-10">
              <p className="review-item-author">{review.author}</p>
              <p className="review-item-rating">{stars}</p>
            </div>
            <p className="review-item-likes col-sm-2">Likes: {review.likes}</p>
          </div>
          <p className="review-item-body">{review.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;