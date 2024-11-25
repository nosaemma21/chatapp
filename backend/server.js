require("dotenv").config(); //environment variables config

const express = require("express");
const dbconnect = require("./dbconnect.js");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");

const { app, server } = require("./socket/socket");

//app export was on this line...
const port = process.env.PORT || 5000;
const dir = path.resolve();

// middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(dir, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(dir, "frontend", "dist", "index.html"));
});

// Port to run

// Starting up the server
const startServer = async () => {
  try {
    await dbconnect(process.env.MONG0_URI);
    server.listen(port, () => {
      console.log(`Server is running on port ${port} 🖥️  🖥️  🖥️`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
