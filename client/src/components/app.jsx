import React, { Component } from 'react';
import Stats from './stats.jsx';
import ReviewList from './reviewList.jsx';
import $ from 'jquery';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    const currentId = Math.floor(Math.random() * 100) + 1;
    console.log(currentId);
    if ($.get) {
      $.get({
        url: `/reviews/${currentId}`
      })
        .then((reviews) => {
          this.setState({
            reviews: reviews.reverse()
          });
        });
    }
  }

  render() {
    return (
      <div className="reviews-component container">
        <p className="reviews-component-header">REVIEWS</p>
        <Stats reviews={this.state.reviews}/>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default Review;