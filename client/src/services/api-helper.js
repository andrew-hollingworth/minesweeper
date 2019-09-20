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

export const showHighScore = async () => {
  const resp = await axios.get(`${BASE_URL}/highscores/global`);
  return resp.data;
};

export const updateHighScores = async () => {
  const resp = await api.put('./highscores/global');
  return resp.data;
};

export const userScores = async () => {
  const resp = await api.get('./highscores/global/:userid');
  return resp.data;
};

export const showUserScores = async () => {
  const resp = await api.get('./user/:userid');
  return resp.data;
};

export const addScore = async () => {
  const resp = await api.post('./users/:id');
  return resp.data;
};

export const deleteScore = async () => {
  const resp = await api.delete('./scores/:scoredid');
  return resp.data;
};

export const recentScore = async () => {
  const resp = await api.get('./users/:userid/times');
  return resp.data;
};
