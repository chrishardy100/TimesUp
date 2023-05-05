import React, { useState } from 'react';

function EventForm() {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Create new event object
    const newEvent = { title, start, end, location };

    // Send POST request to API with new event
    fetch('/api/controllers/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    // Clear form inputs
    setTitle('');
    setStart('');
    setEnd('');
    setLocation('');
  }

  return (
    <div>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="start" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="end" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="end"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventForm;
