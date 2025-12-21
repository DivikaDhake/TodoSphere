import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function Todos({ todos, deleteTodo, toggleComplete, updateTodo }) {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter(t =>
    filter === "completed" ? t.completed :
    filter === "pending" ? !t.completed : true
  );

  const completed = todos.filter(t => t.completed).length;

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <h2 className="text-center mb-3">Recent Todos</h2>

      {/* Stats */}
      <div className="card text-center mb-3">
        <b>Total: {todos.length} </b>
        <b> Completed: {completed} </b>
        <b> Pending: {todos.length - completed}</b> 
      </div>

      <p><b style={{fontSize:"1.25rem"}}>Check Todos status wise: </b>  
      <select
        className="form-select mb-3"
        onChange={e => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select> 
      </p>

      {filteredTodos.length === 0 ? (
        <div className="card text-center">
          No todos found!
        </div>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            updateTodo={updateTodo}
          />
        ))
      )}
    </div>
  );
}
