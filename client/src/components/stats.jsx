import React, { Component } from 'react';

const Stats = function(props) {
  let ratings = {};
  let average = 0;
  for (let i = 0; i < props.reviews.length; i++) {
    average += props.reviews[i].rating;
    if (ratings[Math.ceil(props.reviews[i].rating / 2)]) {
      ratings[Math.ceil(props.reviews[i].rating / 2)]++;
    } else {
      ratings[Math.ceil(props.reviews[i].rating / 2)] = 1;
    }
  }
  average /= props.reviews.length;
  average = Math.floor(average * 10) / 10;

  const sizes = [];
  for (let i = 1; i <= 5; i++) {
    const percent = (ratings[i] / props.reviews.length) * 100;
    sizes.push({
      'maxWidth': `${percent + 25 || 1}%`
    });
  }

  const stars = [];
  if (average % 2) {
    let numbStars = Math.floor(average / 2);
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
      <div className="col-sm-2"></div>
      <div className="col-sm-3">
        <h1>{(average / 2) || 0}</h1>
        <p>{stars}</p>
        <p><i className="icon-user"></i> {props.reviews.length} total</p>
      </div>
      <div className="col-sm-1"></div>
      <div className="col-sm-4 bars">
        <div className="graph-cont">
          <div className="b-graph">
            <div className="bar five" style={sizes[4]}>&#8203;</div>
          </div>
          <div className="b-graph">
            <div className="bar four" style={sizes[3]}>&#8203;</div>
          </div>
          <div className="b-graph">
            <div className="bar three" style={sizes[2]}>&#8203;</div>
          </div>
          <div className="b-graph">
            <div className="bar two" style={sizes[1]}>&#8203;</div>
          </div>
          <div className="b-graph">
            <div className="bar one" style={sizes[0]}>&#8203;</div>
          </div>
        </div>
      </div>
      <div className="col-sm-2"></div>
    </div>
  );
};

export default Stats;