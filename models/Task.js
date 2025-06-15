class Task {
    constructor(id, title, completed = false, projectId = null, userId = null) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.projectId = projectId;
        this.userId = userId;
    }
}
module.exports = Task;