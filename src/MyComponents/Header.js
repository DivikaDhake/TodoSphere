import React from 'react';
import { Link } from "react-router-dom";

export default function Header({ toggleTheme, theme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand" to="/">TodoSphere</Link>

      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/add">Add Todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todos">Recent Todos</Link>
        </li>
      </ul>

      <button className="btn btn-light" style={{marginLeft: "1000px"}} onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
