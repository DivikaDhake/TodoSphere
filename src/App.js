import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Landing from './MyComponents/Landing';
import AddTodo from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    setTodos([...todos, {
      id: Date.now(),
      title,
      desc,
      completed: false
    }]);
  };

  const deleteTodo = id =>
    setTodos(todos.filter(t => t.id !== id));

  const toggleComplete = id =>
    setTodos(todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));

  const updateTodo = (id, title, desc) =>
    setTodos(todos.map(t =>
      t.id === id ? { ...t, title, desc } : t
    ));

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/add" element={<AddTodo addTodo={addTodo} />} />
            <Route
              path="/todos"
              element={
                <Todos
                  todos={todos}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                  updateTodo={updateTodo}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
