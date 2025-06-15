const express = require('express');
const router = express.Router();

module.exports = (repos) => {
    const taskController = require('../controllers/taskController')(repos.task, repos.project, repos.user);
    const projectController = require('../controllers/projectController')(repos.project);
    const userController = require('../controllers/userController')(repos.user);

    router.get('/tasks', taskController.getAll);
    router.get('/tasks/:id', taskController.getById);
    router.post('/tasks', taskController.create);
    router.put('/tasks/:id', taskController.update);
    router.delete('/tasks/:id', taskController.delete);

    router.get('/projects', projectController.getAll);
    router.post('/projects', projectController.create);
    router.delete('/projects/:id', projectController.delete);

    router.get('/users', userController.getAll);
    router.post('/users', userController.create);
    router.delete('/users/:id', userController.delete);

    return router;
};
