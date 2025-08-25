import { useState } from "react";
import { TodoList } from "./components/TodoList";
import type { Todo } from "./components/ToDo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
