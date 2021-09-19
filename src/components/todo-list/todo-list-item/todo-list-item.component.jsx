import React from "react";

import styles from "./todo-list-item.styles.module.css";

const TodoListItem = (props) => {
  const { children, onDelete, id } = props;
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export { TodoListItem };
