const { Appointment, Rescue, Donation, Contact } = require("../models/adminModel");

// ✅ Get Dashboard Data
exports.getDashboardData = async (req, res) => {
    try {
        const totalAppointments = await Appointment.countDocuments();
        const totalRescues = await Rescue.countDocuments();
        const totalContacts = await Contact.countDocuments();

        const totalDonations = await Donation.aggregate([
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);

        res.json({
            appointments: totalAppointments,
            rescues: totalRescues,
            donations: totalDonations.length ? totalDonations[0].totalAmount : 0,
            contacts: totalContacts
        });
    } catch (error) {
        console.error("🔥 Error fetching dashboard data:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Get All Appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ date: -1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Get All Rescue Reports
exports.getAllRescueReports = async (req, res) => {
    try {
        const reports = await Rescue.find().sort({ date: -1 });
        res.json(reports);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Get All Donations
exports.getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find().sort({ date: -1 });
        res.json(donations);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Get All Contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// Update Appointment
exports.updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!updatedAppointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        
        res.json(updatedAppointment);
    } catch (error) {
        res.status(400).json({ error: "Failed to update appointment", details: error.message });
    }
};

// Delete Appointment
exports.deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        
        if (!deletedAppointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        
        res.json({ message: "Appointment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete appointment", details: error.message });
    }
};

// Update Rescue Report
exports.updateRescueReport = async (req, res) => {
    try {
        const updatedRescue = await Rescue.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!updatedRescue) {
            return res.status(404).json({ error: "Rescue report not found" });
        }
        
        res.json(updatedRescue);
    } catch (error) {
        res.status(400).json({ error: "Failed to update rescue report", details: error.message });
    }
};

// Delete Rescue Report
exports.deleteRescueReport = async (req, res) => {
    try {
        const deletedRescue = await Rescue.findByIdAndDelete(req.params.id);
        
        if (!deletedRescue) {
            return res.status(404).json({ error: "Rescue report not found" });
        }
        
        res.json({ message: "Rescue report deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete rescue report", details: error.message });
    }
};

// Update Donation
exports.updateDonation = async (req, res) => {
    try {
        const updatedDonation = await Donation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!updatedDonation) {
            return res.status(404).json({ error: "Donation not found" });
        }
        
        res.json(updatedDonation);
    } catch (error) {
        res.status(400).json({ error: "Failed to update donation", details: error.message });
    }
};

// Delete Donation
exports.deleteDonation = async (req, res) => {
    try {
        const deletedDonation = await Donation.findByIdAndDelete(req.params.id);
        
        if (!deletedDonation) {
            return res.status(404).json({ error: "Donation not found" });
        }
        
        res.json({ message: "Donation deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete donation", details: error.message });
    }
};


// Update Contact
exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!updatedContact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({ error: "Failed to update contact", details: error.message });
    }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        
        if (!deletedContact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        
        res.json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete contact", details: error.message });
    }
};