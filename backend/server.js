const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());
app.use("/", authRoutes);
app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Server running at http://localhost:${PORT}/`);
  }
});