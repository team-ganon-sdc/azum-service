import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Review from '../client/src/components/app.jsx';
import ReviewList from '../client/src/components/reviewList.jsx';
import ReviewItem from '../client/src/components/reviewItem.jsx';

describe('Review', () => {
  test('renders review list', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.find(ReviewList).length).toEqual(1);
  });

  test('review list has some list items', () => {
    const testReview = [{
      author: 'Tester',
      body: 'I\'m baby',
      item: 6,
      rating: 5,
      likes: 25,
      _id: 'tentacle'
    }];
    // Renders when no reviews
    const empty = shallow(<ReviewList reviews={[]}/>);
    expect(empty.find(ReviewItem).length).toBe(0);
    // Renders when reviews exist
    const filled = shallow(<ReviewList reviews={testReview}/>);
    expect(filled.find(ReviewItem).length).toBe(1);
  });

  test('review list item is rendered', () => {
    const testReview = [{
      author: 'Tester',
      body: 'I\'m baby',
      item: 6,
      rating: 5,
      likes: 25,
      _id: 'tentacle'
    }];
    // Renders when reviews exist
    const item = shallow(<ReviewItem key={testReview[0]._id} review={testReview[0]}/>);
    expect(item).toMatchSnapshot();
  });
});