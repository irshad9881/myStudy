const express = require("express");
const app = express();

// packages
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// connection to DB and cloudinary
const { connectDB } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// routes
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const paymentRoutes = require("./routes/payments");
const courseRoutes = require("./routes/course");

// middleware
// app.use(express.json()); // to parse json body
app.use(cookieParser());
// Increase payload limit
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));
app.use(
  cors({
    origin: "http://localhost:5173", // frontend link
    origin: "*",
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
    limits: { fileSize: 200 * 1024 * 1024 },
  })
);
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//     limits: { fileSize: 200 * 1024 * 1024 }, // 200 MB
//   })
// );
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});

// connections
connectDB();
cloudinaryConnect();

// mount route
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/reach", courseRoutes);
// Default Route
app.get("/", (req, res) => {
  // console.log('Your server is up and running..!');
  res.send(`<div>
    This is Default Route  
    <p>Everything is OK</p>
    </div>`);
});
