import axios from "axios";

// Create an instance of Axios with baseURL
const api = axios.create({
  // baseURL: 'http://localhost:3012/users/api/v1'
  baseURL: 'https://orbit-finance-api.herokuapp.com/users/api'
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear sessionStorage
      sessionStorage.clear();
      // Reload the page
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;