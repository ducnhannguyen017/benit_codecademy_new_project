import {
  GET_CATEGORY_ERROR,
  GET_CATEGORY_LOADING,
  GET_CATEGORY_SUCCESS,
} from "redux/constant/ActionType";

import { put, call, takeLatest } from "@redux-saga/core/effects";
import { requestGetAllCategories } from "api/api";

//worker related to category
function* getCategory() {
  try {
    const response = yield call(requestGetAllCategories);
    yield put({ type: GET_CATEGORY_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_CATEGORY_ERROR, payload: err });
  }
}
//watcher related to category
const watchGetCategory = takeLatest(GET_CATEGORY_LOADING, getCategory);

// watch all action to category
function* categorySaga() {
  yield watchGetCategory;
}
export default categorySaga;
