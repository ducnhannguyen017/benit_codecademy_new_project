import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_SUCCESS,
  GET_USER_BY_ID_ERROR,
  GET_USER_BY_ID_LOADING,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_LIST_ERROR,
  GET_USER_LIST_LOADING,
  GET_USER_LIST_SUCCESS,
  UPLOAD_AVATAR_ERROR,
  UPLOAD_AVATAR_LOADING,
  UPLOAD_AVATAR_SUCCESS,
} from "redux/constant/ActionType";

import { put, call, takeLatest } from "@redux-saga/core/effects";
import {
  requestGetUserById,
  requestGetUserList,
  requestLogin,
  requestUploadAvatar,
} from "api/api";

function* postAuth(action) {
  try {
    const response = yield call(requestLogin, action.payload);
    localStorage.setItem("currentUser", JSON.stringify(response.data));

    yield put({ type: AUTH_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: AUTH_ERROR, payload: err });
  }
}
const watchAuth = takeLatest(AUTH_LOADING, postAuth);

function* getUserById(action) {
  try {
    const response = yield call(requestGetUserById, action.payload);
    yield put({ type: GET_USER_BY_ID_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_USER_BY_ID_ERROR, payload: err });
  }
}
const watchUserById = takeLatest(GET_USER_BY_ID_LOADING, getUserById);

function* uploadAvatar(action) {
  try {
    const response = yield call(
      requestUploadAvatar,
      action.payload.id,
      action.payload.params
    );
    yield put({ type: UPLOAD_AVATAR_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: UPLOAD_AVATAR_ERROR, payload: err });
  }
}
const watchUploadAvatar = takeLatest(UPLOAD_AVATAR_LOADING, uploadAvatar);

function* userList(action) {
  try {
    const response = yield call(requestGetUserList);
    yield put({ type: GET_USER_LIST_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_USER_LIST_ERROR, payload: err });
  }
}
const watchUserList = takeLatest(GET_USER_LIST_LOADING, userList);

function* authSaga() {
  yield watchAuth;
  yield watchUserById;
  yield watchUploadAvatar;
  yield watchUserList;
}
export default authSaga;
