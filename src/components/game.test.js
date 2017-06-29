import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

describe('<Game />', () => {
  it('renders game without imploding', () => {
    shallow(<Game />);
  });

  it('renders Header, GuessSection, GuessCount, GuessList', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.contains(<Header />)).toEqual(true);
    expect(wrapper.contains(<GuessSection />)).toEqual(true);
    expect(wrapper.contains(<GuessCount />)).toEqual(true);
    expect(wrapper.contains(<GuessList />)).toEqual(true);
  });
});
