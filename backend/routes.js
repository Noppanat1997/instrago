const express = require("express");
const TaskModel = require("./model/Task.model");

const router = express.Router();

/**
 * Get all todo tasks
 */
router.get("/tasks/todo", async (req, res) => {
  const tasks = await TaskModel.find({ isFinished: false });
  res.send(tasks);
});

/**
 * Get all done tasks
 */
router.get("/tasks/done", async (req, res) => {
  const tasks = await TaskModel.find({ isFinished: true });
  res.send(tasks);
});

/**
 * Get task by Id
 */
router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await TaskModel.findOne({ _id: req.params.id });
    res.send(task);
  } catch {
    res.status(404);
    res.send({ error: "Task doesn't exist!" });
  }
});

/**
 * Create task
 */
router.post("/tasks", async (req, res) => {
  const task = new TaskModel({
    ...req.body,
  });

  await task.save();
  res.send(task);
  res.send();
});

/**
 * Update task by Id
 */
router.patch("/tasks/:id", async (req, res) => {
  try {
    const task = await TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.send(task);
  } catch {
    res.status(404);
    res.send({ error: "Task doesn't exist!" });
  }
});

/**
 * Delete task by Id
 */
router.delete("/tasks/:id", async (req, res) => {
  try {
    await TaskModel.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Task doesn't exist!" });
  }
});

module.exports = router;
