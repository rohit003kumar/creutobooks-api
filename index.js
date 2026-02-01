const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const bookRoutes = require("./routes/book.route");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", bookRoutes);

// Database
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
