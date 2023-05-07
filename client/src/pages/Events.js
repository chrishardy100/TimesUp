import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';



function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>My Events</h1>
      {events.map(event => <EventCard /*key*/ id={event.id} title={event.title} date={event.date} description={event.description} />)}
      console.log(id);
    </div>
  );
}

export default Events;
