
const express = require("express");
const router = express.Router();

// Load each controller
const eventController = require("./events.js");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/events", eventController);

module.exports = router;
