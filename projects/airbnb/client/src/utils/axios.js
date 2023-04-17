import axios from 'axios';

const MAX_RETRY_COUNT = 3;
let retryCount = 0;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${
  JSON.parse(localStorage.getItem('airbnb-auth'))?.accessToken
}`;
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(
  async (request) => {
    request.headers = {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('airbnb-auth'))?.accessToken
      }`,
    };
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (retryCount < MAX_RETRY_COUNT) {
        retryCount++;
        try {
          const { data } = await axiosInstance.get('/auth/refresh-token');
          localStorage.setItem('airbnb-auth', JSON.stringify(data.data));

          axiosInstance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${data.data.accessToken}`;

          return axiosInstance(originalRequest);
        } catch (err) {
          localStorage.removeItem('airbnb-auth');
          window.location.reload();
          return Promise.reject(err);
        }
      } else {
        retryCount = 0;
        localStorage.removeItem('airbnb-auth');
        window.location.reload();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
