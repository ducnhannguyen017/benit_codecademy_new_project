import {
  DELETE_POST_DETAIL,
  DELETE_POST_DETAIL_SUCCESS,
  GET_ALL_POSTS_ERROR,
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_POSTS_BY_CATE_ERROR,
  GET_POSTS_BY_CATE_LOADING,
  GET_POSTS_BY_CATE_SUCCESS,
  GET_POSTS_BY_USER_ERROR,
  GET_POSTS_BY_USER_LOADING,
  GET_POSTS_BY_USER_SUCCESS,
  GET_POST_DETAIL_ERROR,
  GET_POST_DETAIL_LOADING,
  GET_POST_DETAIL_SUCCESS,
} from "redux/constant/ActionType";

import { put, call, takeLatest } from "@redux-saga/core/effects";
import {
  requestGetAllPosts,
  requestGetPostByCategory,
  requestGetPostById,
  requestGetPostsByUserId,
} from "api/api";

function* getPost() {
  try {
    const response = yield call(requestGetAllPosts);
    yield put({ type: GET_ALL_POSTS_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_ALL_POSTS_ERROR, payload: err });
  }
}
//watcher related to post
const watchGetPost = takeLatest(GET_ALL_POSTS_LOADING, getPost);

//worker related to post
function* getPostsByCate(action) {
  try {
    const response = yield call(requestGetPostByCategory, action.payload);
    yield put({ type: GET_POSTS_BY_CATE_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_POSTS_BY_CATE_ERROR, payload: err });
  }
}
//watcher related to post
const watchGetPostsByCate = takeLatest(
  GET_POSTS_BY_CATE_LOADING,
  getPostsByCate
);

//worker related to post
function* getPostsByUser(action) {
  try {
    const response = yield call(requestGetPostsByUserId, action.payload);
    yield put({ type: GET_POSTS_BY_USER_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_POSTS_BY_USER_ERROR, payload: err });
  }
}
//watcher related to post
const watchGetPostByUser = takeLatest(
  GET_POSTS_BY_USER_LOADING,
  getPostsByUser
);

//worker related to post
function* getPostDetail(action) {
  try {
    const response = yield call(requestGetPostById, action.payload);
    yield put({ type: GET_POST_DETAIL_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_POST_DETAIL_ERROR, payload: err });
  }
}
//watcher related to post
const watchGetPostDetail = takeLatest(GET_POST_DETAIL_LOADING, getPostDetail);

function* deletePostDetail() {
  yield put({ type: DELETE_POST_DETAIL_SUCCESS });
}
const watchDeletePostDetail = takeLatest(DELETE_POST_DETAIL, deletePostDetail);

function* postSaga() {
  yield watchGetPost;
  yield watchGetPostByUser;
  yield watchGetPostDetail;
  yield watchGetPostsByCate;
  yield watchDeletePostDetail;
}
export default postSaga;
