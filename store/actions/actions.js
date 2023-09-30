import { GUESS, RESTART } from '../types';

export const guessNumber = (number) => {
  return {
    type: GUESS,
    payload: number,
  };
};

export const restartGame = () => {
  return {
    type: RESTART,
  };
};