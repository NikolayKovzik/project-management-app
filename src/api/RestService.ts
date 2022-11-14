import axios from 'axios';

const API_URL = 'https://final-task-backend-production-10f4.up.railway.app/';

// https://final-task-backend-production-10f4.up.railway.app/api-docs/

const ManagerAppApi = axios.create({
  baseURL: API_URL,
});

ManagerAppApi.interceptors.request.use((config) => {
  if (config.headers) {
    return {
      ...config,
      headers: { ...config.headers, Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
  }
  throw new Error('No Headers!');
});

export default ManagerAppApi;
