const express =  require('express');
const router = express.Router();
const groups = require('../controllers/task-group.controller');
const tasks = require('../controllers/tasks.controller');

router.get('/task-groups', groups.list);
router.post('/task-groups', groups.create);
router.delete('/task-groups/:id', groups.delete);
router.get('/task-groups/:id', groups.detail);

router.post('/task-groups/:groupId/tasks', tasks.create);
router.delete('/tasks/:id', tasks.delete);

module.exports = router;