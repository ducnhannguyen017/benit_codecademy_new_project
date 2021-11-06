import {
  GET_IMAGE_LIST_ERROR,
  GET_IMAGE_LIST_LOADING,
  GET_IMAGE_LIST_SUCCESS,
} from "redux/constant/ActionType";

import { put, call, takeLatest } from "@redux-saga/core/effects";
import { requestImageList } from "api/api";

//worker related to image
function* getImageList() {
  try {
    const response = yield call(requestImageList);
    console.log(response);
    yield put({ type: GET_IMAGE_LIST_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_IMAGE_LIST_ERROR, payload: err });
  }
}
//watcher related to image
const watchGetImageList = takeLatest(GET_IMAGE_LIST_LOADING, getImageList);

// watch all action to image
function* imageSaga() {
  yield watchGetImageList;
}
export default imageSaga;
