const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password, role } = req.body;

  // Validate input
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
