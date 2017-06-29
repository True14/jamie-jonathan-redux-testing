import {NEW_GAME, newGame, TOGGLE_INFO_MODAL, toggleInfoModal, MAKE_GUESS, makeGuess} from './actions';

describe('newGame', () => {
  it('Should return the action', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
  });
});

describe('toggleInfoModal', () => {
  it('Should return the action', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = 84;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});
