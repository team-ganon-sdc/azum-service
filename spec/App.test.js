import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Review from '../client/src/components/app.jsx';
import ReviewList from '../client/src/components/reviewList.jsx';

describe('Review', () => {
  test('renders review list', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.find(ReviewList).length).toEqual(1);
  });
});