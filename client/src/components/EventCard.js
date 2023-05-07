import React from "react";
import { Link } from "react-router-dom";

function EventCard({ title, date, description, id }) {
  const localDate = new Date(date).toLocaleDateString();

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{localDate}</p>
          <p className="card-text">{description}</p>
          <Link to={"/events/" + id} className="btn btn-primary">
            View Event 
          </Link>
        </div>
        <div className="card-footer small text-muted text-end">{"ID: " + id}</div>
      </div>
    </div>
  );
}

export default EventCard;
