const mongoose = require("mongoose");
require("../config/db.config");

const Task = require("../models/task.model");
const TaskGroup = require("../models/task-group.model");

// drop mongoose database
mongoose.connection.dropDatabase().then(() => {
  TaskGroup.create({
    name: "Group 1",
  }).then((group) => {
    for (let i = 0; i < 100; i++) {
      Task.create({
        group: group.id,
        title: `Task ${i}`,
        description: "super task",
        dueAt: new Date(Date.now() + 3600000),
        labels: ["label1", "label2"],
      }).then((task) => {
        console.log(`task ${task.title} created`);
      });
    }
  });
});
