import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

const api = axios.create({
  baseURL: "https://fair-market-backend.herokuapp.com/api",
  // baseURL: "http://localhost:3000/api",
});

api.interceptors.request.use(
  async function (options) {
    options.headers["Authorization"] = await getToken();
    return options;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
