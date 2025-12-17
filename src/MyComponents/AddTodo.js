import React, { useState, useRef, useEffect } from 'react';

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const titleRef = useRef();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const submit = e => {
    e.preventDefault();
    if (!title || !desc){
       return alert("All fields must be filled");
    }
    else{
      alert("Todo added successfully");
    }
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      <div className="card">
        <h3>Add New Todo</h3>
        <form onSubmit={submit}>
          <input ref={titleRef} className="form-control mb-2"
            placeholder="Todo title" value={title}
            onChange={e => setTitle(e.target.value)} />
          <input className="form-control mb-3"
            placeholder="Todo description" value={desc}
            onChange={e => setDesc(e.target.value)} />
          <button className="btn btn-success w-100">Add Todo</button>
        </form>
      </div>
    </div>
  );
}
