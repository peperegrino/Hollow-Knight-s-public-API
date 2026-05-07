import axios from 'axios';

const BASE_URL = 'https://hollow-knight.herokuapp.com/api/v1/hollow-knight';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Tempo de conexão esgotado. Verifique sua internet.'));
    }
    if (!error.response) {
      return Promise.reject(new Error('Sem conexão com o servidor.'));
    }
    return Promise.reject(error);
  }
);

export const getBosses = async () => {
  const { data } = await api.get('/bosses');
  return data;
};

export const getBossById = async (id) => {
  const { data } = await api.get(`/bosses/${id}`);
  return data;
};

export const getFriendlyNPCs = async () => {
  const { data } = await api.get('/friendly-npcs');
  return data;
};

export const getNPCById = async (id) => {
  const { data } = await api.get(`/friendly-npcs/${id}`);
  return data;
};

export const getLocations = async () => {
  const { data } = await api.get('/locations');
  return data;
};

export const getLocationById = async (id) => {
  const { data } = await api.get(`/locations/${id}`);
  return data;
};

export default api;