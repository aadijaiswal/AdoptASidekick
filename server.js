const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 6969;

// Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to AdoptASidekick ');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
