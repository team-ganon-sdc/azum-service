import React, { Component } from 'react';
import ReviewItem from './reviewItem.jsx';

const ReviewList = function(props) {
  const reviews = [];
  for (let i = 0; i < props.reviews.length; i++) {
    reviews.push(<ReviewItem key={i}/>);
  }

  return (
    <div>
      <p><em>The following are hard-coded elements to represent data</em></p>
      {reviews}
    </div>
  );
};

export default ReviewList;