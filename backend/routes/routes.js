const express = require("express");
const router = express.Router();

const Registration = require("../model/Registration");

router.get("/fetch-data", async (req, res) => {
    try {
        const registrations = await Registration.find(); 

        res.json({ registrations });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
