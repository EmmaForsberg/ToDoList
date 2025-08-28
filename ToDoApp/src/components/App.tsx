import { useState } from "react";
import { TodoList } from "./TodoList";
import type { Todo } from "./ToDo";
import { AddTodoForm } from "./AddTodoForm";
import "../CSS/App.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string, author: string) {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      author,
      completed: false,
      time: new Date(),
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <div className="top-center-form">
        <div className="form-wrapper">
          <AddTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="todos-content">
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </>
  );
};

export default App;
