const express = require("express");
const {
    getDashboardData,
    getAllAppointments,
    getAllRescueReports,
    getAllDonations,
    getAllContacts,
    updateAppointment,
    deleteAppointment,
    updateRescueReport,
    deleteRescueReport,
    updateDonation,
    deleteDonation,
    updateContact,
    deleteContact
} = require("../controllers/adminController");

const router = express.Router();

// ✅ Define the API Routes
router.get("/dashboard", getDashboardData);
router.get("/appointments", getAllAppointments);
router.get("/rescue", getAllRescueReports);
router.get("/donations", getAllDonations);
router.get("/contacts", getAllContacts);
router.put("/appointment/:id", updateAppointment);
router.delete("/appointment/:id", deleteAppointment);
router.put("/rescue/:id", updateRescueReport);
router.delete("/rescue/:id", deleteRescueReport);
router.put("/donations/:id", updateDonation);
router.delete("/donations/:id", deleteDonation);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

module.exports = router;