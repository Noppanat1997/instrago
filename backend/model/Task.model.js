const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
