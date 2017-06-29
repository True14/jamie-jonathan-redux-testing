import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';

describe('<TopNav />', () => {
  it('renders top nav without crashing', () => {
    shallow(<TopNav />);
  });

  it('should dispatch toggleInfoModal when What is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.what');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });

  it('should dispatch newGame when New Game is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });
})
