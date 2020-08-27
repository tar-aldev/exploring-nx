import React, { FC } from 'react';
import { Todo } from '@t-zander/data';
import './todos.scss';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[]
}

export const Todos: FC<TodosProps> = ({ todos }) => {
  return (
    <ul>
        {todos.map((todo, index) => (
          <li className="todo" key={index}>
            {todo.title}
          </li>
        ))}
      </ul>
  );
};

export default Todos;
