const Registration = require("../model/Registration");
const bcrypt = require("bcryptjs");

exports.registerProject = async (req, res) => {
    try {
        const { username, password, ...otherFields } = req.body;

        // Validate required fields
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }

        // Check if the username already exists
        const existingUser = await Registration.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new registration
        const newRegistration = new Registration({
            username,
            password: hashedPassword, // Save the hashed password
            ...otherFields,
        });

        // Save the registration to the database
        await newRegistration.save();

        // Respond with success message
        res.status(201).json({ message: "Registration successful!" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "An error occurred during registration." });
    }
};