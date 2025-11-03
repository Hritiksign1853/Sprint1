const express = require('express');
const donationController = require('../controllers/donationController');

const router = express.Router();

router.post('/donate', donationController.createDonation);
router.get('/donations', donationController.getAllDonations);

module.exports = router;
