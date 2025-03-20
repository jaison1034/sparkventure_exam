// authRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../model/Registration"); // Ensure this path is correct

const router = express.Router();

// Update the route to /student-login (remove /api)
router.post("/student-login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the student by username
        const student = await Student.findOne({ username });

        if (!student) {
            return res.status(400).json({ success: false, message: "Invalid username or password." });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid username or password." });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: student._id, username: student.username }, "your_jwt_secret", { expiresIn: "1h" });

        // Return success response with token
        res.json({ success: true, token, username: student.username });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error." });
    }
});

module.exports = router;