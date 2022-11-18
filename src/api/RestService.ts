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
      headers: { ...config.headers, Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
  }
  throw new Error(`no headers!`);
});

ManagerAppApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 /* && !isRetry */) {
      try {
        // isRetry = true; //TODO чтобы не было бесконечного цикла
        const { userId } = JSON.parse(localStorage.getItem('user') || '');

        const { refreshToken } = JSON.parse(localStorage.getItem('user') || '');

        const res = await axios.get(`${API_URL}/users/${userId}/tokens`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        localStorage.setItem('token', res.data.token);
        if (originalRequest) {
          return await ManagerAppApi.request(originalRequest);
        }
      } catch (e) {
        // console.log('error with 401', e);
      }
    }
    return error.response;
  }
);

export default ManagerAppApi;
