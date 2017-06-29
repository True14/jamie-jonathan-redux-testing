import React from 'react';
import {shallow} from 'enzyme';
import GuessForm from './guess-form';
import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />)
  });

  it('Renders the fedback', () => {
    const feedback = "Example";
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });

  it('Should render an h2 and GuessForm', () => {
    const feedback = "Example";
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(<GuessForm />)).toEqual(true);
    expect(wrapper.find('#feedback').exists()).toEqual(true);
  })


})
