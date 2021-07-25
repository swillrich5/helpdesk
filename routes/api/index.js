const router = require("express").Router();
const requestRoutes = require("./requests");

// Airline routes
router.use("/airlines", requestRoutes);

module.exports = router;
