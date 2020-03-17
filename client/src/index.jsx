import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/reviewList.jsx';
import $ from 'jquery';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 10,
      reviews: [],
      value: ''
    };
  }

  componentDidMount() {
    $.get({
      url: `/reviews/${this.state.currentId}`
    })
      .then((reviews) => {
        this.setState({
          reviews: reviews.reverse()
        });
      });
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
          reviews: reviews.reverse()
        });
      });
  }

  handleReviewPost() {
    const review = {
      author: 'Jon',
      body: 'I\'m baby biodiesel before they sold out chia disrupt skateboard. Selfies bicycle rights hashtag wolf hexagon health goth chambray distillery chia chartreuse. Bespoke kickstarter fanny pack taxidermy. Mlkshk venmo everyday carry gentrify, YOLO synth activated charcoal literally vaporware truffaut pop-up bespoke keytar. Lomo taiyaki synth af VHS.',
      item: this.state.currentId,
      rating: 5,
      likes: 25,
      _id: 'hsfvljkhsv'
    };
    $.post({
      url: '/reviews',
      data: review
    })
      .then(() => {
        this.setState({
          reviews: [review].concat(this.state.reviews)
        });
      });
  }

  handleNumberChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleIdClick() {
    if (this.state.value !== '' && this.state.value >= 1 && this.state.value <= 100) {
      this.setState({
        currentId: this.state.value
      });
      setTimeout(() => {
        this.getReviewsForItem();
      }, 100);
    }
  }

  render() {
    return (
      <div className="reviews-component container">
        <h3 className="reviews-component-header">REVIEWS</h3>
        <p className="for-testing"><em>The following inputs are used exclusevily for testing</em></p>
        <input className="for-testing" onChange={this.handleNumberChange.bind(this)} type="number" min="1" max="100"></input>
        <button className="for-testing" onClick={this.handleIdClick.bind(this)}>Switch App ID</button>
        <button className="for-testing" onClick={this.handleReviewPost.bind(this)} >Sent post request for testing</button>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Review />,
  document.getElementById('review')
);