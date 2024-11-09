const express = require("express");
const router = express.Router();

const { getUsersForSidebar } = require("../controllers/user.controller.js");
const protectedRoute = require("../middleware/protectRoute.js");

router.get("/", protectedRoute, getUsersForSidebar);

module.exports = router;
