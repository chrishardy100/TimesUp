import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from API
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="calendar">
      <h1>My Calendar</h1>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Calendar;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import EventModal from './EventModal';

// const Calendar = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('/api/events');
//       setEvents(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     fetchEvents();
//   };

//   return (
//     <div className="calendar">
//       <h1>My Calendar</h1>
//       <div className="calendar-grid">
//         {/* Render days of the week */}
//         <div className="day-of-week">Sunday</div>
//         <div className="day-of-week">Monday</div>
//         <div className="day-of-week">Tuesday</div>
//         <div className="day-of-week">Wednesday</div>
//         <div className="day-of-week">Thursday</div>
//         <div className="day-of-week">Friday</div>
//         <div className="day-of-week">Saturday</div>

//         {/* Render calendar cells */}
//         {getCalendarCells(selectedDate).map((cell, index) => (
//           <div
//             key={index}
//             className={`calendar-cell ${cell.isCurrentMonth ? 'current-month' : 'not-current-month'}`}
//             onClick={() => handleDateClick(cell.date)}
//           >
//             <div className="date">{cell.date.getDate()}</div>
//             {events.map((event) => (
//               <div
//                 key={event.id}
//                 className={`event ${isSameDay(event.date, cell.date) ? 'event-active' : ''}`}
//               >
//                 {event.title}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       {modalOpen && (
//         <EventModal
//           selectedDate={selectedDate}
//           handleCloseModal={handleCloseModal}
//         />
//       )}
//     </div>
//   );
// };

// const getCalendarCells = (date) => {
//   const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
//   const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//   const startDate = new Date(monthStart);
//   const endDate = new Date(monthEnd);
//   const daysBeforeMonthStart = (startDate.getDay() + 6) % 7; // Number of days to display from previous month
//   const daysInMonth = monthEnd.getDate(); // Number of days in current month
//   const daysAfterMonthEnd = (7 - endDate.getDay()) % 7; // Number of days to display from next month
//   const totalDays = daysBeforeMonthStart + daysInMonth + daysAfterMonthEnd;
//   const calendarCells = [];

//   for (let i = 0; i < totalDays; i++) {
//     const cellDate = new Date(startDate.getTime() + (i - daysBeforeMonthStart) * 24 * 60 * 60 * 1000);
//     calendarCells.push({
//       date: cellDate,
//       isCurrentMonth: cellDate >= monthStart && cellDate <= monthEnd,
//     });
//   }

//   return calendarCells;
// };

// const isSameDay = (date1, date2) => {
//   return (
//     date1.getFullYear() === date2.getFullYear() &&
//     date1.getMonth() === date2.getMonth() &&
//     date1.getDate() === date2.getDate()
//   );
// };

// export default Calendar;