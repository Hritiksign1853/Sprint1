const express = require("express");
const { getAllRescueReports, createRescueReport, updateRescueReport, deleteRescueReport } = require("../controllers/rescueController");

const router = express.Router();

router.get("/", getAllRescueReports);
router.post("/", createRescueReport);
router.put("/:reportId", updateRescueReport);
router.delete("/:reportId", deleteRescueReport);

module.exports = router;
