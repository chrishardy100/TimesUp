const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single event by ID
router.get('/:id', getEvent, (req, res) => {
  res.json(res.event);
});

// CREATE a new event
router.post('/', async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE an existing event
router.patch('/:id', getEvent, async (req, res) => {
  if (req.body.title != null) {
    res.event.title = req.body.title;
  }

  if (req.body.description != null) {
    res.event.description = req.body.description;
  }

  if (req.body.start != null) {
    res.event.start = req.body.start;
  }

  if (req.body.end != null) {
    res.event.end = req.body.end;
  }

  try {
    const updatedEvent = await res.event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an event
router.delete('/:id', getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get an event by ID
async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find event' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.event = event;
  next();
}

module.exports = router;
