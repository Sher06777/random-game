import { GUESS, RESTART } from "../types";

const initialState = {
  num: Math.floor(Math.random() * 101),
  guess: null,
  answer: '',
  over: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS:
      const inputValue = action.payload;
      let answer = '';

      if (inputValue === state.num) {
        answer = 'Поздравляем, вы отгадали число';
      } else if (inputValue < state.num) {
        answer = 'Не правильно, берите выше';
      } else {
        answer = 'Не правильно, берите ниже';
      }

      return {
        ...state,
        guess: inputValue,
        answer,
        over: inputValue === state.num,
      };

    case RESTART:
      return {
        ...state,
        num: Math.floor(Math.random() * 101),
        guess: null,
        answer: '',
        over: false,
      };

    default:
      return state;
  }
};

export default reducer;