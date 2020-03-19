import React, { Component } from 'react';

const Stats = function() {
  return (
    <div className="row stats">
      <div className="col-sm-7">
        <h1>3.5</h1>
        <p>/\ /\ /\ /</p>
        <p>25 total</p>
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