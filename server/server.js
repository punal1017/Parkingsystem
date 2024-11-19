const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const authRoutes = require('./Routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
