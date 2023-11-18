import axios from './axios'

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)
export const getTasksRequest = () => axios.get(`/tasks`)

export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task)
export const createTaskRequest = (task) => axios.post(`/tasks`, task)

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`)

