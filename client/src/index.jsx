import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 3,
      reviews: []
    };
  }

  getReviewsForItem() {
    if (this.state.currentId === -1) {
      return;
    }
    $.get({
      url: `/reviews/${this.state.currentId}`
    })
      .then((reviews) => {
        this.setState({
          reviews
        });
        console.log(reviews);
      });
  }

  handleReviewPost() {
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
    })
      .then(() => {
        console.log('sent');
      });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.handleReviewPost} >Sent post request for testing</button>
        <button onClick={this.getReviewsForItem.bind(this)} >Get me some reviews</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Review />,
  document.getElementById('review')
);