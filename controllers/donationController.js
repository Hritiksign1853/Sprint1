const Donation = require('../models/donation');

// Create a new donation

exports.createDonation = async (req, res) => {
  try {
    const { name, email, phone, amount, paymentMethod, transactionId } = req.body;

    if (!name || !email || !amount || !paymentMethod || !transactionId) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const newDonation = new Donation({
      name,
      email,
      phone,
      amount,
      paymentMethod,
      transactionId,
      status: 'success'
    });

    await newDonation.save();
    res.status(201).json({ message: 'Donation recorded successfully', donation: newDonation });

  } catch (error) {
    console.error("Donation Processing Error:", error);  // ✅ Log actual error
    res.status(500).json({ message: "Error processing donation", error: error.message });
  }
};

// Get all donations
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving donations', error });
  }
};
  