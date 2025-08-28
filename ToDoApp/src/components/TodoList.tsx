//Ansvara för att visa alla todos i en lista
import { type Todo } from "../components/ToDo.tsx";


type TodoListProps = {
  todos: Todo[];
   deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const TodoList = ({ todos, deleteTodo, toggleTodo }: TodoListProps) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div className="todo-info">
            <h3 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</h3>
            <p>{todo.author}</p>
            <p>{todo.time.toLocaleString()}</p>
            <p>{todo.completed ? "Done" : "Not done"}</p>
          </div>
          <div className="todo-actions">
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Ångra" : "Klar"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Radera</button>
          </div>
        </div>
      ))}
    </div>
  );
};
