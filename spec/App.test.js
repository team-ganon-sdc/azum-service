import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App, { Review } from '../client/src/index.jsx';

describe('Review', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Review />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});