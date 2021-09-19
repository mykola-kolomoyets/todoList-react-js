import React from "react";

import "./todo-list-item.styles.css";

const TodoListItem = (props) => {
  const { children, onDelete, id } = props;
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export { TodoListItem };
