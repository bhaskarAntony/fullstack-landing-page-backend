const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors()); // Correctly invoking the cors middleware
app.use(express.json()); // No need for body-parser

// Routes
app.use('/api', require('./routes/leads'));
app.use('/api', require('./routes/internship'));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
