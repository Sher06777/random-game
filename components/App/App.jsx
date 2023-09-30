import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guessNumber, restartGame } from "../../store/actions/actions";
import classes from "./App.module.css";

const App = () => {
  const { answer, over } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onGuess = () => {
    const inputNumber = parseInt(inputValue);

    if (!isNaN(inputNumber)) {
      dispatch(guessNumber(inputNumber));
    }

    setInputValue("");
  };

  const onRestart = () => {
    dispatch(restartGame());
  };

  return (
    <div className={classes.game}>
      <h1>Игра "Угадай число"</h1>
      {over ? (
        <>
          <p>{answer}</p>
          <button className={classes.restart} onClick={onRestart}>Заново</button>
        </>
      ) : (
        <>
          <input
            type="number"
            value={inputValue}
            onChange={inputChange}
            placeholder="Введите вашу догадку"
          />
          <button onClick={onGuess}>Проверить</button>
          <p>{answer}</p>
        </>
      )}
    </div>
  );
};

export default App;
