const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  estimatedTime: {
    type: Number,
    required: true,
  },
  elapsedTime: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    enum: ['Running', 'Paused', 'Completed'],
    default: 'Paused',
  },
  lastStartTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Task', taskSchema);
