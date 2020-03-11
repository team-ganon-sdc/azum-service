import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Review extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Review />,
  document.getElementById('review')
);