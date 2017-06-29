import reducer from './reducer';
import {newGame, toggleInfoModal, makeGuess} from './actions';

describe('Reducer', () => {
  it('Should set the initial state', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toEqual(false);
  });

  it('Should return the current state on an unknown acction', () => {
    let currentState = {};

    const state = reducer (currentState, {type: '__UNKNOWN'});

    expect(state).toBe(currentState);
  });

  describe('newGame', () => {
    it('Should reset the state to the initial values when newGame action is called', () => {
     let currentState = {
       guesses: [2,3,4],
      feedback: 'Whatever',
      correctAnswer: 34,
      showInfoModal: true
    };

     currentState = reducer(currentState, newGame());

     expect(currentState.guesses).toEqual([]);
     expect(currentState.feedback).toEqual('Make your guess!');
     expect(currentState.correctAnswer).toBeGreaterThanOrEqual(1);
     expect(currentState.correctAnswer).toBeLessThanOrEqual(100);
     expect(currentState.showInfoModal).toEqual(false);
  });
 });

 describe('makeGuess', () => {
   it('Should add the guess to guesses array and update feedback', () => {
     const guess = 89;
     const currentState = {
       guesses: [2,3,4],
      feedback: 'Whatever',
      correctAnswer: 34,
      showInfoModal: false
    };

  const newState = reducer(currentState, makeGuess(guess));

    expect(newState.guesses).toEqual([...currentState.guesses, guess]);
    expect(newState.feedback).toEqual('You\'re Ice Cold...');
    expect(newState.correctAnswer).toBeGreaterThanOrEqual(1);
    expect(newState.correctAnswer).toBeLessThanOrEqual(100);
    expect(newState.showInfoModal).toEqual(false);

  });
});

 describe('toggleInfoModal', () => {
   it('Should toggle the showInfoModal', () => {
     const currentState = {
       guesses: [2,3,4],
      feedback: 'Whatever',
      correctAnswer: 34,
      showInfoModal: false
    };

  const newState = reducer(currentState, toggleInfoModal());

    expect(newState.showInfoModal).toEqual(true);

  });
});

});
