import axios from "axios";

const BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL
})

export const register = async (formData) => {
  const resp = await api.post('/auth/register', formData);
  debugger;
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`

  return resp.data.user;
};

export const login = async (formData) => {
  const resp = await api.post('/auth/login', formData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user;
};

export const showHighScore = async () => {
  const resp = await axios.get(`${BASE_URL}/highscores/global`);
  return resp.data;
};

export const updateHighScores = async () => {
  const resp = await axios.put(`${BASE_URL}/highscores/global`);
  return resp.data;
};

export const userScores = async (userid) => {
  const resp = await axios.get(`${BASE_URL}/highscores/global/${userid}`, userid);
  return resp.data;
};

export const showUserScores = async (userid) => {
  const resp = axios.get(`${BASE_URL}/user/${userid}`);
  return resp.data;
};

export const addScores = async (id) => {
  const resp = await axios.post(`${BASE_URL}/users/${id}`);
  return resp.data;
};

export const deleteScores = async (scoreid) => {
  const resp = await axios.delete(`${BASE_URL}/scores/${scoreid}`);
  return resp.data;
};

export const recentScores = async (userid) => {
  const resp = await axios.get(`${BASE_URL}/users/${userid}/times`);
  return resp.data;
};
