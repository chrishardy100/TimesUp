import React, { useState } from 'react';
import axios from 'axios';

const EventModal = ({ selectedDate, handleCloseModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = { title, description, date: selectedDate };
    try {
      await axios.post('/api/events', eventData);
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
