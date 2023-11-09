import axios from "axios";
// import { logOut } from "../components/settings-outlet/SettingsApi";
import { toast } from "react-toastify";

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
  async (error) => {
    if (error.response && error.response.status === 401) {
      // await logOut();
      // toast.error("User token expired, pls login again", {
      //   position: "top-center",
      //   autoClose: 15000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      // Clear sessionStorage
      sessionStorage.clear();
      // Reload the page
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;