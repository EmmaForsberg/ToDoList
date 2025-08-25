//Ansvara för att visa alla todos i en lista
import { type Todo } from "../components/ToDo.tsx";

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.author}</p>
          <p>{todo.time.toLocaleString()}</p>
          <p>{todo.completed ? "Done" : "Not done"}</p>
        </div>
      ))}
    </div>
  );
};
