const router = require("express").Router();
const Donate = require("../models/donate");

// Route to get all donations
router.get("/", async (req, res) => {
  try {
    const donations = await Donate.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new donation
router.post("/", async (req, res) => {
  const newDonation = new Donate(req.body);

  try {
    const savedDonation = await newDonation.save();
    res.status(201).json({message: "Donation Successfull"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
