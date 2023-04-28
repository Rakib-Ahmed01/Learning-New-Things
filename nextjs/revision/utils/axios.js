const { default: axios } = require('axios');

export const axiosInstance = axios.create({
  baseURL: '',
});
