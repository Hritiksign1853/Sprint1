const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware

router.post("/signup", signupController.signup); 
router.post("/login", signupController.login);

// ✅ Example: Protecting a route (e.g., user dashboard)
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to your dashboard", user: req.user });
});

module.exports = router;
