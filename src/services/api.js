import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  getTodos: async (page = 1, limit = 5) => {
    const response = await axios.get(`${API_URL}/todos?_page=${page}&_limit=${limit}&_sort=createdAt&_order=desc`);
    return {
      todos: response.data,
      total: parseInt(response.headers['x-total-count'] || '0')
    };
  },

  getTodoById: async (id) => {
    const response = await axios.get(`${API_URL}/todos/${id}`);
    return response.data;
  },

  createTodo: async (todo) => {
    const newTodo = {
      ...todo,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    const response = await axios.post(`${API_URL}/todos`, newTodo);
    return newTodo; // Return our generated todo since the API is mock
  },

  updateTodo: async (id, updates) => {
    const response = await axios.put(`${API_URL}/todos/${id}`, updates);
    return { ...response.data, id }; // Ensure we keep our ID
  },

  deleteTodo: async (id) => {
    await axios.delete(`${API_URL}/todos/${id}`);
    return id;
  }
};