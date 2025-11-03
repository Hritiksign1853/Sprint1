const Appointment = require('../models/appointment');

// User books an appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { name, email, phone, service, date, time, message } = req.body;

        if (!name || !email || !phone || !service || !date || !time) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newAppointment = new Appointment({ name, email, phone, service, date, time, message });
        await newAppointment.save();

        res.status(201).json({ message: "Appointment booked successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// Admin gets all appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ createdAt: -1 });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
