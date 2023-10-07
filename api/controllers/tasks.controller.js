const createError = require('http-errors');
const TaskGroup = require('../models/task-group.model');
const Task = require('../models/task.model');

module.exports.create = (req, res, next) => {
  TaskGroup.findById(req.params.groupId)
    .then((group) => {
      if (!group) {
        next(createError(404, 'Task group not found'))
      } else {
        req.body.group = group.id;
        return Task.create(req.body)
          .then((task) => res.status(201).json(task));
      }
    })
    .catch((error) => next(error));
}


module.exports.delete = (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
    .then((task) => {
      if (!task) {
        next(createError(404, 'Task not found'))
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => next(error));
} 