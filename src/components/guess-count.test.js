import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
  it('renders without exploding', () => {
    shallow(<GuessCount />);
  });

  it('Renders the correct guess count', () => {
    const value = 15;
    const wrapper = shallow(<GuessCount count={value} />);
    expect(wrapper.text()).toEqual(`Guess #${value}!`);
  })
})
