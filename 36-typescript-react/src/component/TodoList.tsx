import { useState } from 'react';
import { TodoItemProp } from '../types/types';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState<TodoItemProp[]>([
    { id: 1, content: '첫번째 메모', completed: false },
    { id: 2, content: '두번 째 메모', completed: true },
  ]);

  return (
    <>
      {todos.map((todo) => {
        <TodoItem
          id={todo.id}
          content={todo.content}
          completed={todo.completed}
        />;
      })}
    </>
  );
}

export default TodoList;
