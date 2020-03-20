import React, { Component } from 'react';
import $ from 'jquery';

class ReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: props.review,
      stars: []
    };
  }

  componentDidMount() {
    const stars = [];
    const review = this.state.review;
    if (review.rating % 2) {
      let numbStars = (review.rating - 1) / 2;
      for (let i = 0; i < numbStars; i++) {
        stars.push(<i key={i} className="icon-star"></i>);
      }
      stars.push(<i key="half-empty" className="icon-star-half-empty"></i>);
    } else {
      let numbStars = (review.rating - 1) / 2;
      for (let i = 0; i < numbStars; i++) {
        stars.push(<i key={i} className="icon-star"></i>);
      }
    }
    this.setState({
      stars
    });
  }

  handleLikeClick() {
    const review = this.state.review;
    if ($.post) {
      $.post({
        url: `/likes/${review._id}`
      })
        .then(()=> {
          review.likes++;
          this.setState({
            review
          });
        });
    }
  }

  render() {
    return (
      <div className="review-item">
        <div className="row">
          <div className="col-md-2 author-image">
            <p className="circle">{this.state.review.author[0]}</p>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-sm-10 col-md-9">
                <p className="review-item-author">{this.state.review.author}</p>
                <p className="review-item-rating">{this.state.stars}</p>
              </div>
              <p className="review-item-likes col-sm-2 col-md-3"><a onClick={this.handleLikeClick.bind(this)}><i className="icon-thumbs-up"></i></a>: {this.state.review.likes}</p>
            </div>
            <p className="review-item-body">{this.state.review.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewItem;