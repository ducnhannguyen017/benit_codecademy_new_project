import {
  AUTH_LOADING,
  GET_USER_BY_ID_LOADING,
  GET_USER_LIST_LOADING,
} from "redux/constant/ActionType";

export const postAuth = (payload) => ({
  type: AUTH_LOADING,
  payload: payload,
});

export const getUserById = (id) => ({
  type: GET_USER_BY_ID_LOADING,
  payload: id,
});

export const getUserList = () => ({
  type: GET_USER_LIST_LOADING,
  payload: {},
});
