import React from 'react';
import {shallow, mount} from 'enzyme';
import {makeGuess} from  '../actions';
import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
  it('renders guess form without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should dispatch makeGuess on form submission', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = 10;
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value.toString()));
  });

  it('Should render a button', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.find('#guessButton').exists()).toEqual(true);
  })
})
