import React from "react";
import EventCard from "../components/EventCard";

function EventsForDay({ events }) {
  const eventCards = events.map((event) => (
    <EventCard
      key={event.id}
      title={event.title}
      date={event.date}
      description={event.description}
      eventId={event.id} // changed 'id' to 'eventId'
    />
  ));

  return (
    <div className="container">
      {eventCards.length > 0 ? (
        <div className="row">{eventCards}</div>
      ) : (
        <div className="alert alert-info">No events for this day.</div>
      )}
    </div>
  );
}

export default EventsForDay;
