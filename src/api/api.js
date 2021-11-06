import axios from "axios";
import { ApiClient } from "./config";

export const requestImageList = () => ApiClient.get("/image/list");
export const requestGetAllCategories = () => ApiClient.get("/category/list");
export const requestLogin = (params) => ApiClient.post(`/login`, params);
export const requestGetAllPosts = () => ApiClient.get(`/post/list`);
export const requestGetPostById = (id) => ApiClient.get(`/post/one/${id}`);
export const requestGetUserList = () => ApiClient.get(`/user/list`);
export const requestGetPostByCategory = (id) =>
  ApiClient.get(`/post/get-by-category/${id}`);
export const requestGetPostsByUserId = (id) =>
  ApiClient.get(`/post/get-by-user/${id}`);

export const requestGetUserById = (id) =>
  ApiClient.get(`/user/get-by-id/${id}`);
export const refreshApi = () =>
  axios.get(`http://localhost:8080/api/user/token/refresh`, {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2NvdW50YWRtaW4iLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwiZXhwIjoxNjM2MTA0MTQwfQ.57OTetQorRBas6n5FyAODTtJsuGS45PretXiJ47kjKk",
    },
  });

export const requestPostSavePost = (params) =>
  ApiClient.post(`/post/save`, params);

export const requestDeletePost = (id) => ApiClient.post(`/post/delete/${id}`);
export const requestUploadAvatar = (id, params) =>
  ApiClient.post(`image/upload-to-user/${id}`, params);
export const requestDeleteUser = (id) => ApiClient.post(`user/delete/${id}`);
