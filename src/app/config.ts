const apiUrl = 'https://localhost:44332';

export const CONFIG = {
    apiUrl: apiUrl,
    getProjects: `${apiUrl}/projects`,
    deleteProject: `${apiUrl}/projects`,
    createProject:`${apiUrl}/projects`,
    getFunctionalities: `${apiUrl}/projects/`,
    createFunctionality: `${apiUrl}/projects`,
    deleteFunctionality: `${apiUrl}/projectsDeleteFunc`,
    getUsers: `${apiUrl}/users`,
    getTasks: `${apiUrl}/tasks/`,
    createTask: `${apiUrl}/tasks`,
    deleteTask: `${apiUrl}/deleteTask`
}
