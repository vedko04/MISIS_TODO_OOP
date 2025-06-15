const Task = require('../models/Project');

module.exports = (taskRepo, projectRepo, userRepo) => ({
    getAll: (req, res) => res.json(taskRepo.getAll()),

    getById: (req, res) => {
        const task = taskRepo.getById(+req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    },

    create: (req, res) => {
        const { title, completed, projectId, userId } = req.body;
        if (!title) return res.status(400).json({ error: 'Title required' });
        if (projectId && !projectRepo.getById(projectId))
            return res.status(400).json({ error: 'Invalid projectId' });
        if (userId && !userRepo.getById(userId))
            return res.status(400).json({ error: 'Invalid userId' });

        const task = new Task(null, title, completed ?? false, projectId, userId);
        res.status(201).json(taskRepo.create(task));
    },

    update: (req, res) => {
        const updated = taskRepo.update(+req.params.id, req.body);
        if (!updated) return res.status(404).json({ error: 'Task not found' });
        res.json(updated);
    },

    delete: (req, res) => {
        const success = taskRepo.delete(+req.params.id);
        if (!success) return res.status(404).json({ error: 'Task not found' });
        res.status(204).send();
    }
});