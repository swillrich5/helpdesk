const router = require("express").Router();
const requestRoutes = require("./requests");

// Airline routes
router.use("/requests", requestRoutes);

module.exports = router;
