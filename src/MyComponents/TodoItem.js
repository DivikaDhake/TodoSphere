import React, { useState } from 'react';

export default function TodoItem({ todo, deleteTodo, toggleComplete, updateTodo }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);

  const save = () => {
    updateTodo(todo.id, title, desc);
    setEdit(false);
  };

  return (
    <div className="card">
      {edit ? (
        <>
          <input className="form-control mb-2" value={title} onChange={e => setTitle(e.target.value)} />
          <input className="form-control mb-2" value={desc} onChange={e => setDesc(e.target.value)} />
        </>
      ) : (
        <>
          <h5 style={{
            textDecoration: todo.completed ? "line-through" : "none",
            opacity: todo.completed ? 0.6 : 1
          }}>
            {todo.title}
          </h5>
          <p>{todo.desc}</p>
        </>
      )}

      <div className="d-flex gap-2 mt-2">
        {edit ? (
          <button className="btn btn-success" onClick={save}>Save</button>
        ) : (
          <button className="btn btn-warning" onClick={() => setEdit(true)}>Edit</button>
        )}
        <button className="btn btn-primary" onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
