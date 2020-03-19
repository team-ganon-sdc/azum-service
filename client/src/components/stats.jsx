import React, { Component } from 'react';

const Stats = function(props) {
  let average = 0;
  for (let i = 0; i < props.reviews.length; i++) {
    average += props.reviews[i].rating;
  }
  average /= props.reviews.length;

  average = Math.floor(average * 10) / 10;

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
        <p><i className="icon-user"></i> {props.reviews.length} total</p>
      </div>
      <div className="col-sm-5 bars">
        <div className="graph-cont">
          <div className="b-graph">
            <div className="bar five">60%</div>
          </div>
          <div className="b-graph">
            <div className="bar four">60%</div>
          </div>
          <div className="b-graph">
            <div className="bar three">60%</div>
          </div>
          <div className="b-graph">
            <div className="bar two">60%</div>
          </div>
          <div className="b-graph">
            <div className="bar one">60%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;