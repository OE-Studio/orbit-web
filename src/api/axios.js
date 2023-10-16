import axios from "axios";
import { logOut } from "../components/settings-outlet/SettingsApi";

// Create an instance of Axios with baseURL
const api = axios.create({
  // baseURL: 'http://localhost:3012/users/api/v1'
  baseURL: 'https://orbit-finance-api.herokuapp.com/users/api'
});

// Add a response interceptor new
api.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      logOut();
      // Clear sessionStorage
      sessionStorage.clear();
      // Reload the page
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;