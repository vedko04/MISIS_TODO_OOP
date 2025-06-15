module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'TODO API',
        version: '1.0.0',
        description: 'API для управления задачами, проектами и пользователями'
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'Local server'
        }
    ],
    paths: {
        // TASK ENDPOINTS
        '/tasks': {
            get: {
                summary: 'Получить все задачи',
                responses: {
                    200: {
                        description: 'Список задач'
                    }
                }
            },
            post: {
                summary: 'Создать задачу',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    title: { type: 'string' },
                                    completed: { type: 'boolean' },
                                    projectId: { type: 'integer' },
                                    userId: { type: 'integer' }
                                },
                                required: ['title']
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Задача создана'
                    },
                    400: {
                        description: 'Ошибка валидации'
                    }
                }
            }
        },
        '/tasks/{id}': {
            get: {
                summary: 'Получить задачу по ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    200: { description: 'Задача найдена' },
                    404: { description: 'Не найдена' }
                }
            },
            put: {
                summary: 'Обновить задачу',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    title: { type: 'string' },
                                    completed: { type: 'boolean' },
                                    projectId: { type: 'integer' },
                                    userId: { type: 'integer' }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Задача обновлена' },
                    404: { description: 'Не найдена' }
                }
            },
            delete: {
                summary: 'Удалить задачу',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    204: { description: 'Удалено' },
                    404: { description: 'Не найдена' }
                }
            }
        },

        // PROJECT ENDPOINTS
        '/projects': {
            get: {
                summary: 'Получить все проекты',
                responses: {
                    200: { description: 'Список проектов' }
                }
            },
            post: {
                summary: 'Создать проект',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    name: { type: 'string' }
                                },
                                required: ['name']
                            }
                        }
                    }
                },
                responses: {
                    201: { description: 'Проект создан' }
                }
            }
        },
        '/projects/{id}': {
            delete: {
                summary: 'Удалить проект',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    204: { description: 'Удалено' },
                    404: { description: 'Не найдено' }
                }
            }
        },

        // USER ENDPOINTS
        '/users': {
            get: {
                summary: 'Получить всех пользователей',
                responses: {
                    200: { description: 'Список пользователей' }
                }
            },
            post: {
                summary: 'Создать пользователя',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: { type: 'string' }
                                },
                                required: ['username']
                            }
                        }
                    }
                },
                responses: {
                    201: { description: 'Пользователь создан' }
                }
            }
        },
        '/users/{id}': {
            delete: {
                summary: 'Удалить пользователя',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    204: { description: 'Удалено' },
                    404: { description: 'Не найден' }
                }
            }
        }
    }
};
