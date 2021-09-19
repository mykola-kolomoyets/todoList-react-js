import React from "react";

import { TodoListItem } from "../todo-list-item";
import "./todo-list.styles.css";

const TodoList = (props) => {
  const { items, onDeleteItem } = props;
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <TodoListItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </TodoListItem>
      ))}
    </ul>
  );
};

export { TodoList };
