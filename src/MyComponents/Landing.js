import React from 'react';
import { Link } from "react-router-dom";

export default function Landing({theme}) {
  const isDark = theme === "dark";
  return (
    <div className="d-flex justify-content-center" style={{ minHeight: "80vh", }}>
  <div className="text-center p-5 rounded shadow bg-primary-light" style={{
          maxWidth: "800px",
          color: isDark ? "#fff" : "#000",
          transition: "all 0.3s ease",
          backgroundColor: isDark ? "#111827" : "#9ecbff" 
        }}>
    
    <h1 className="mb-3">Organize Your Day</h1>
    <h3 className="mb-3" style={{ color: isDark ? "#0d6dfddc" : "#0a367aff" }}>
      Everything you need to manage tasks — in one place.
    </h3>

    <p className="mb-4" style={{ color: isDark ? "#dcdcdc" : "#070630ff" }}>
      Feature-rich task management app designed to bring everything you need to organize your day into one clean, intuitive space. It allows you to easily add, edit, update, and delete tasks while clearly
      tracking their status as pending or completed.
      With smart filters, you can instantly view all tasks or focus only on what matters right now.
      TodoSphere also supports light and dark themes, giving it a professional, visually pleasing look that adapts to your preference.
    </p>

    <img
      src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
      width="150"
      alt="todo"
      className="mb-4"
    />

    <br />
    <Link to="/add" className="btn btn-primary btn-lg px-3">
      Add Todo
    </Link>

  </div>
</div>

  );
}
