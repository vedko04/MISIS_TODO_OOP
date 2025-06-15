class TaskRepository {
    constructor() {
        this.tasks = new Map();
        this.nextId = 1;
    }

    create(task) {
        task.id = this.nextId++;
        this.tasks.set(task.id, task);
        return task;
    }

    getAll() {
        return Array.from(this.tasks.values());
    }

    getById(id) {
        return this.tasks.get(id) || null;
    }

    update(id, data) {
        const task = this.tasks.get(id);
        if (!task) return null;
        Object.assign(task, data);
        this.tasks.set(id, task);
        return task;
    }

    delete(id) {
        return this.tasks.delete(id);
    }
}
module.exports = TaskRepository;