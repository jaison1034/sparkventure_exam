
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const registrationRoutes = require("./routes/registrationRoutes");
const studentAuthRoutes = require("./routes/authRoutes");

const routes = require("./routes/routes");
const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = 'mongodb+srv://jaison:jaison123@cluster0.rgqxccy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log("MongoDB Connection Error: ", err));

app.use("/api", registrationRoutes);
app.use("/api", studentAuthRoutes);

app.use("/api", routes); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
