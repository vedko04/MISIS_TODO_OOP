const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./config/swagger');

const TaskRepository = require('./repositories/taskRepository');
const ProjectRepository = require('./repositories/projectRepository');
const UserRepository = require('./repositories/userRepository');

const repos = {
    task: new TaskRepository(),
    project: new ProjectRepository(),
    user: new UserRepository()
};

const routes = require('./routes')(repos);

app.use(express.json());
app.use('/api', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));