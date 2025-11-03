const express = require("express");
const router = express.Router();
const resetPasswordController = require("../controllers/resetPasswordController");

router.post("/request-password-reset", resetPasswordController.requestPasswordReset);
router.post("/reset-password", resetPasswordController.resetPassword);

module.exports = router;
