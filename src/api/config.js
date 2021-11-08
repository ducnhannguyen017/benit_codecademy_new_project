import axios from "axios";

const URL = "https://benit-backend-codecademy-news.herokuapp.com/api";
// const URL = "http://localhost:8080/api";

function createAxios() {
  var axiosInstance = axios.create();

  axiosInstance.defaults.baseURL = URL;
  axiosInstance.defaults.headers = { "Content-Type": "application/json" };
  axiosInstance.defaults.headers = { "Access-Control-Allow-Origin": "*" };
  axiosInstance.defaults.headers = {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  };
  axiosInstance.defaults.headers = {
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser !== null) {
    axiosInstance.interceptors.request.use(
      async (config) => {
        const ignoreUrl = [
          "/image/list",
          "/category/list",
          "/post/list",
          "/post/one",
          "post/get-by-category",
          "/post/get-by-user",
          "/user/get-by-id",
        ];
        var haveAuth = true;
        ignoreUrl.forEach((element) => {
          if (config.url.includes(element)) {
            haveAuth = false;
          }
        });
        console.log(haveAuth);
        console.log(currentUser.accessToken);
        if (haveAuth) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${currentUser.accessToken}`,
          };
          console.log(config.headers);
        }
        console.log(config);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        const originalConfig = err.config;
        // Access Token was expired
        if (err.response) {
          if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
              const rs = await axios.get(`${URL}/user/token/refresh`, {
                headers: {
                  Authorization: "Bearer " + currentUser.refreshToken,
                },
              });
              if (rs.status !== 200) {
                window.location.href = "/sign-in";
              } else {
                console.log(rs);
                const { accessToken } = rs.data;
                currentUser.accessToken = accessToken;
                localStorage.setItem(
                  "currentUser",
                  JSON.stringify(currentUser)
                );
              }
              return axiosInstance(originalConfig);
            } catch (error) {
              return Promise.reject(error);
            }
          }
        }
        return Promise.reject(err);
      }
    );
  }
  return axiosInstance;
}

export const axiosClient = createAxios();

export const ApiClient = {
  get: (url, payload) => axiosClient.get(url, payload),
  post: (url, payload) => axiosClient.post(url, payload),
  put: (url, payload) => axiosClient.put(url, payload),
  path: (url, payload) => axiosClient.patch(url, payload),
  delete: (url, payload) => axiosClient.delete(url, payload),
};
