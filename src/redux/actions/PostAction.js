import {
  DELETE_POST_DETAIL,
  GET_ALL_POSTS_LOADING,
  GET_POSTS_BY_CATE_LOADING,
  GET_POSTS_BY_USER_LOADING,
  GET_POST_DETAIL_LOADING,
} from "redux/constant/ActionType";

export const getPostList = () => ({
  type: GET_ALL_POSTS_LOADING,
  payload: {},
});

export const getPostsByUser = (id) => ({
  type: GET_POSTS_BY_USER_LOADING,
  payload: id,
});

export const getPostDetail = (id) => ({
  type: GET_POST_DETAIL_LOADING,
  payload: id,
});

export const getPostsByCate = (id) => ({
  type: GET_POSTS_BY_CATE_LOADING,
  payload: id,
});

export const deletePostDetail = () => ({
  type: DELETE_POST_DETAIL,
  payload: {},
});
