import axios from "axios";

const BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL
})

export const register = async (formData) => {
  const resp = await api.post('/auth/register', formData);

  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`

  return resp.data.user;
};

export const login = async (formData) => {
  const resp = await api.post('./auth/login', formData);
  return resp.data.user;
};
