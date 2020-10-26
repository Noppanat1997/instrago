const express = require("express");
const TaskModel = require("./model/Task.model");

const router = express.Router();

router.get("/tasks", async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
});

module.exports = router;
