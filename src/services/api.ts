import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  // Configura o limite de conteúdo para 1MB
  maxContentLength: 1 * 1024 * 1024,
});

export const apiCep = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      window.localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);

export default api;
