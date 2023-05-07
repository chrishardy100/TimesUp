const express = require("express");
const router = express.Router();
const db = require("../models");
const { Event } = db;

router.get("/", (req, res) => {
  Event.findAll({}).then((allEvents) => res.json(allEvents));
});

router.post("/", (req, res) => {
  const { title, date, description } = req.body;

  Event.create({ title, date, description })
    .then((newEvent) => {
      res.status(201).json(newEvent);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Event.findByPk(id).then((event) => {
    if (!event) {
      return res.sendStatus(404);
    }

    res.json(event);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Event.findByPk(id).then((event) => {
    if (!event) {
      return res.sendStatus(404);
    }

    event.title = req.body.title;
    event.date = req.body.date;
    event.description = req.body.description;
    event
      .save()
      .then((updatedEvent) => {
        res.json(updatedEvent);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Event.findByPk(id).then((event) => {
    if (!event) {
      return res.sendStatus(404);
    }

    event.destroy();
    res.sendStatus(204);
  });
});
// router.deleteAll("/", (req, res) => {
//   Event.destroy({
//     where: {},
//     truncate: true
//   }).then(() => {
//     res.sendStatus(204);
//   }).catch((err) => {
//     res.status(400).json(err);
//   });
// });

module.exports = router;
 