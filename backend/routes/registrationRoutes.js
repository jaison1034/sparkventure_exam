const express = require("express");
const { registerProject } = require("../controllers/registrationController");

const router = express.Router();

// Route for registering a new user
router.post("/register", registerProject);

module.exports = router;