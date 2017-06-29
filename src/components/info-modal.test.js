import React from 'react';
import {shallow, mount} from 'enzyme';

import {InfoModal} from './info-modal';

describe('<InfoModal />', () => {
  it('renders info modal without crashing', () => {
    shallow(<InfoModal />);
  });

  it('should close info modal when you click on Got It', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<InfoModal dispatch={dispatch} />);
    const link = wrapper.find('.close');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });

})