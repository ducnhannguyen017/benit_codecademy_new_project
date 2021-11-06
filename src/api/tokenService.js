const TokenService = {
  getLocalRefreshToken: () => {
    const currentUser = localStorage.getItem("currentUser");
    return currentUser?.refreshToken;
  },

  getLocalAccessToken: () => {
    const currentUser = localStorage.getItem("currentUser");
    return currentUser.accessToken;
  },

  updateLocalAccessToken: (token) => {
    let currentUser = localStorage.getItem("currentUser");
    currentUser.accessToken = token;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  },

  getUser: () => {
    return localStorage.getItem("currentUser");
  },

  setUser: (currentUser) => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  },

  removeUser: () => {
    localStorage.removeItem("currentUser");
  },
};

export default TokenService;
