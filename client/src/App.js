import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import Events from "./pages/Events";
import EventModal from "./pages/EventModal";
import EventForm from "./pages/EventForm";

import "./App.css";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Micro Blog
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/calendar">
              Calendar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/model">
              Model
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/form">
              Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">
              Create a Micro Post
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/events" element={<Events />} />
            <Route path="/modal" element={<EventModal />} />
            <Route path="/form" element={<EventForm />} />
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/" element={<PostsListPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
