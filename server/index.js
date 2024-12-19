const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/Tasks.js');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(cors());
app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'openGig',
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
