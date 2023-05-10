import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events").then((response) => {
      setEvents(
        response.data.map((event) => ({
          id: event.id,
          title: event.title,
          start: event.date,
          description: event.description,
        }))
      );
    });
  }, []);

  const handleEventClick = (info) => {
    const event = info.event;
    alert(`Event: ${event.title}\nDescription: ${event.extendedProps.description}`);
  };

  const handleDateClick = (info) => {
    const dateStr = info.dateStr;
    window.location.href = `/events/day/${dateStr}`;
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default Calendar;
