import axios, { AxiosError } from 'axios';

const API_URL = 'https://final-task-backend-production-10f4.up.railway.app/';

// https://final-task-backend-production-10f4.up.railway.app/api-docs/

const ManagerAppApi = axios.create({
  baseURL: API_URL,
});

ManagerAppApi.interceptors.request.use((config) => {
  if (config.headers) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem('project-management-app-token')}`,
      },
    };
  }
  throw new Error(`no headers!`);
});

export default ManagerAppApi;
