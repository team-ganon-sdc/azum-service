import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Review extends Component {
  constructor() {
    super();
  }

  handleReview() {
    // this data is just inserted for testing
    const review = {
      author: 'Jon',
      body: 'I\'m baby biodiesel before they sold out chia disrupt skateboard. Selfies bicycle rights hashtag wolf hexagon health goth chambray distillery chia chartreuse. Bespoke kickstarter fanny pack taxidermy. Mlkshk venmo everyday carry gentrify, YOLO synth activated charcoal literally vaporware truffaut pop-up bespoke keytar. Lomo taiyaki synth af VHS.',
      item: 1,
      rating: 5,
      likes: 25
    };

    $.post({
      url: '/reviews',
      data: review
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.handleReview} >Button Time</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Review />,
  document.getElementById('review')
);