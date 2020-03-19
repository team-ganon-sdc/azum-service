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
        <h3 className="reviews-component-header">REVIEWS</h3>
        <Stats reviews={this.state.reviews}/>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default Review;