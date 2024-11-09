const express = require("express");

const {
  sendMessage,
  getMessages,
} = require("../controllers/message.controllers");
const protectedRoute = require("../middleware/protectRoute");

const router = express.Router();

router.post("/send/:id", protectedRoute, sendMessage);
router.get("/:id", protectedRoute, getMessages); //See messages between users

module.exports = router;
