import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://ai-arena-4i2t.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = {
  register: async ({ name, email, password }) => {
    const response = await api.post('/api/auth/register', { name, email, password });
    return response.data;
  },

  login: async ({ email, password }) => {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  },

  getMe: async () => {
    try {
      const response = await api.get('/api/auth/get-me');
      return response.data;
    } catch {
      return { success: false, user: null };
    }
  },

  logout: async () => {
    const response = await api.post('/api/auth/logout');
    return response.data;
  },
};

export const aiAPI = {
  invoke: async (input, chatId) => {
    const response = await api.post('/invoke', { input, chatId });
    return response.data;
  },
};

export const chatAPI = {
  getChats: async () => {
    const response = await api.get('/api/chats');
    return response.data;
  },

  saveChat: async (chatData) => {
    const response = await api.post('/api/chats', chatData);
    return response.data;
  },

  deleteChat: async (id) => {
    const response = await api.delete(`/api/chats/${id}`);
    return response.data;
  },
};

export default api;
