import React from 'react';
import {shallow, mount} from 'enzyme';

import {Header} from './header';
import InfoModal from './info-modal';
import TopNav from './top-nav';

describe('<Header />', () => {
  it('renders header without crashing', () => {
    shallow(<Header />);
  });

  it('hides info modal on start up', () => {
    const wrapper = shallow(<Header showInfoModal={false} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(false);
  });

  it('should show info modal when toggled', () => {
    const wrapper = shallow(<Header showInfoModal={true}/>);
    expect(wrapper.find(InfoModal).exists()).toEqual(true);
  });

  it('should render top nav and h1', () => {
    const wrapper = shallow(<Header showInfoModal={false}/>);
    expect(wrapper.contains(<TopNav />)).toEqual(true);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  });
  
})