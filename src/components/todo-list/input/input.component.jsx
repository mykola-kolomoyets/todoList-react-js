import React, { useState } from "react";

import { Button } from "../../UI";
import styles from "./input.styles.module.css";

const Input = (props) => {
  const { onAddGoal } = props;

  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.length) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredValue.length);
    if (!enteredValue.length) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles["invalid"]}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export { Input };
