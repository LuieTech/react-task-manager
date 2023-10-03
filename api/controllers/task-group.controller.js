const TaskGroup = require('../models/task-group.model');

module.exports.list = (req, res, next) => {
  TaskGroup.find()
    .then((group) => res.json(group))
    .catch((error) => next(error));
}

module.exports.create = (req, res, next) => {
  TaskGroup.create(req.body)
    .then((group) => res.status(201).json(group))
    .catch((error) => next(error));
}
