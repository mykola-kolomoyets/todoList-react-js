import React from "react";

import { TodoListItem } from "../todo-list-item";
import styles from "./todo-list.styles.module.css";

const TodoList = (props) => {
  const { items, onDeleteItem } = props;
  return (
    <ul className={styles["goal-list"]}>
      {items.map((goal) => (
        <TodoListItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </TodoListItem>
      ))}
    </ul>
  );
};

export { TodoList };
