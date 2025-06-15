class ProjectRepository {
    constructor() {
        this.projects = new Map();
        this.nextId = 1;
    }

    create(project) {
        project.id = this.nextId++;
        this.projects.set(project.id, project);
        return project;
    }

    getAll() {
        return Array.from(this.projects.values());
    }

    getById(id) {
        return this.projects.get(id) || null;
    }

    update(id, data) {
        const project = this.projects.get(id);
        if (!project) return null;
        Object.assign(project, data);
        this.projects.set(id, project);
        return project;
    }

    delete(id) {
        return this.projects.delete(id);
    }
}
module.exports = ProjectRepository;