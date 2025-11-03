const Contact = require('../models/contact');

//  Handle Contact Form Submission
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, emergency, message } = req.body;

    if (!name || !email || !phone || !emergency || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, phone, emergency, message });
    await newContact.save();

    res.status(201).json({ message: "Your message has been received. We will contact you shortly!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

//  Get All Contact Form Submissions
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};
