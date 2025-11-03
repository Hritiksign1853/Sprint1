const express = require("express");
const router = express.Router();
const forgotPasswordController = require("../controllers/forgotPasswordController");

router.post("/request-password-reset", forgotPasswordController.requestPasswordReset);
router.post("/reset-password", forgotPasswordController.resetPassword);

module.exports = router;
