const express = require("express");
const router = express.Router();
const groups = require("../controllers/task-group.controller");
const tasks = require("../controllers/tasks.controller");

router.get("/task-groups", groups.list);
router.post("/task-groups", groups.create);
router.delete("/task-groups/:id", groups.delete);
router.patch("/task-groups/:id", groups.update);
router.get("/task-groups/:id", groups.detail);

router.get("/tasks", tasks.list);
router.get("/tasks/:id", tasks.detail);
router.post("/tasks", tasks.create);
router.patch("/tasks", tasks.update);
router.delete("/tasks/:id", tasks.delete);

module.exports = router;
