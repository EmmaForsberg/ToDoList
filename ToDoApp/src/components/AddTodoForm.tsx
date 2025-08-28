//hantera inputfält där anv kan skriva in ny todo
//skicka upp den nya todo texten till app komponenten via en prop funktion

import { useState } from "react";

type AddTodoFormProps = {
  addTodo: (title: string, author: string) => void;
};
//anv lokal state för inputvärdet med usestate
//Submit handler för formuläret som anropar en prop funktion

import "../CSS/TodoList.css"

export function AddTodoForm({ addTodo }: AddTodoFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

 function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(title,author);
    setTitle("");
    setAuthor("");
 }


  return (
    <>
      <form className="add-todo-form" onSubmit={handleSubmit}>
        <label className="add-todo-form label">
          Title
          <input
            type="text"
            name="titleinput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="add-todo-form label">
          Författare
          <input
            type="text"
            name="authorinput"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <button type="submit" className="add-btn">
          Lägg till
        </button>
      </form>
    </>
  );
}
