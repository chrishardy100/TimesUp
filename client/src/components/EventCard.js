import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  const { title, description, date, time, location, id } = event;

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-unstyled">
            <li><strong>Date:</strong> {date}</li>
            <li><strong>Time:</strong> {time}</li>
            <li><strong>Location:</strong> {location}</li>
          </ul>
          <Link to={`/events/${id}`} className="btn btn-primary">
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
