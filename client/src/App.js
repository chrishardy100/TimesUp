import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Events from "./pages/Events";
import ShowEventPage from "./pages/ShowEventPage";
import EventForm from "./pages/EventForm";

import "./App.css";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Calendar
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/events/new">
              Form
            </NavLink>
          </li>
          <li className="nav-item">

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
            <Route path="/" element={<Events />} />
            <Route path="/events/:id" element={<ShowEventPage />} />
            <Route path="/events/new" element={<EventForm />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
