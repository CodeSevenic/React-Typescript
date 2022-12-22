﻿import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
