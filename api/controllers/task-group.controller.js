const TaskGroup = require('../models/task-group.model');

module.exports.list = (req, res, next) => {
  TaskGroup.find()
    .then((group) => res.json(group))
    .catch((error) => next(error));
}
