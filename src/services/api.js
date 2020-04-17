import axios from 'axios';
import storage from '@/utils/storage';

const api = axios.create({
  baseURL: 'http://localhost:1337/',
  // baseURL: 'http://192.168.0.25:1337'
});

api.interceptors.request.use(async (config) => {
  const token = await storage.getToken();

  const headers = {
    'content-type': 'application/json',
    ...config.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
