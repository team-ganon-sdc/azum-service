import React, { Component } from 'react';

const Stats = function(props) {
  let average = 0;
  for (let i = 0; i < props.reviews.length; i++) {
    average += props.reviews[i].rating;
  }
  average /= props.reviews.length;

  const stars = [];
  if (average % 2) {
    let numbStars = (average - 1) / 2;
    for (let i = 0; i < numbStars; i++) {
      stars.push(<i key={i} className="icon-star"></i>);
    }
    stars.push(<i key="half-empty" className="icon-star-half-empty"></i>);
  } else {
    let numbStars = (average - 1) / 2;
    for (let i = 0; i < numbStars; i++) {
      stars.push(<i key={i} className="icon-star"></i>);
    }
  }

  return (
    <div className="row stats">
      <div className="col-sm-7">
        <h1>{average / 2}</h1>
        <p>{stars}</p>
        <p>{props.reviews.length} total</p>
      </div>
      <div className="col-sm-5 bars">
        <p>|||||||||||||||||||||||</p>
        <p>|||||||||</p>
        <p>|||||</p>
        <p>||</p>
        <p>||||||</p>
      </div>
    </div>
  );
};

export default Stats;