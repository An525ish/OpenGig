const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const task = new Task({
    name: req.body.name,
    estimatedTime: req.body.estimatedTime,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (req.body.status) {
      if (req.body.status === 'Running' && task.status === 'Paused') {
        task.lastStartTime = new Date();
      } else if (req.body.status === 'Paused' && task.status === 'Running') {
        const now = new Date();
        const elapsed = (now - new Date(task.lastStartTime)) / 1000;
        task.elapsedTime += elapsed;
      }
      task.status = req.body.status;
    }

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
