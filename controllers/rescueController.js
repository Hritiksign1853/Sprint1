const Rescue = require("../models/rescueModel");

// ✅ Get All Rescue Reports
exports.getAllRescueReports = async (req, res) => {
    try {
        const reports = await Rescue.find().sort({ date: -1 });
        res.json(reports);
    } catch (error) {
        console.error("🔥 Error fetching rescue reports:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Submit a New Rescue Report
exports.createRescueReport = async (req, res) => {
    try {
        const { reportId, location, rescueType, description, contact } = req.body;
        const images = req.body.images || [];

        const newReport = new Rescue({ reportId, location, rescueType, description, contact, images });
        await newReport.save();
        res.status(201).json({ message: "Rescue report submitted successfully!", rescue: newReport });
    } catch (error) {
        console.error("🔥 Error submitting the report:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Update a Rescue Report Status
exports.updateRescueReport = async (req, res) => {
    try {
        const { reportId } = req.params;
        const { status } = req.body;

        const updatedReport = await Rescue.findOneAndUpdate({ reportId }, { status }, { new: true });
        if (!updatedReport) return res.status(404).json({ error: "Report not found" });

        res.json({ message: "Rescue report updated successfully!", report: updatedReport });
    } catch (error) {
        console.error("🔥 Error updating the report:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Delete a Rescue Report
exports.deleteRescueReport = async (req, res) => {
    try {
        const { reportId } = req.params;

        const deletedReport = await Rescue.findOneAndDelete({ reportId });
        if (!deletedReport) return res.status(404).json({ error: "Report not found" });

        res.json({ message: "Rescue report deleted successfully!" });
    } catch (error) {
        console.error("🔥 Error deleting the report:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
