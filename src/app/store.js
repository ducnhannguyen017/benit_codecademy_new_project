import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { all } from "@redux-saga/core/effects";
//import reducers
import CategoryReducer from "redux/reducers/CategoryReducer";
import AuthReducer from "redux/reducers/AuthReducer";
import PostReducer from "redux/reducers/PostReducer";
import PostsByUserReducer from "redux/reducers/PostsByUserReducer";
import PostDetailReducer from "redux/reducers/PostDetailReducer";
import PostsByCateReducer from "redux/reducers/PostsByCateReducer";
import UserByIdReducer from "redux/reducers/UserByIdReducer";
import ImageListReducer from "redux/reducers/ImageListReducer";
import UserListReducer from "redux/reducers/UserListReducer";
//import sagass
import categorySaga from "redux/sagas/CategorySaga";
import authSaga from "redux/sagas/AuthSaga";
import postSaga from "redux/sagas/PostSaga";
import imageSaga from "redux/sagas/ImageSaga";

//reducers
const reducers = combineReducers({
  categoryState: CategoryReducer,
  authState: AuthReducer,
  postState: PostReducer,
  postsByUserState: PostsByUserReducer,
  postsByCateState: PostsByCateReducer,
  postDetailState: PostDetailReducer,
  userByIdState: UserByIdReducer,
  imageListState: ImageListReducer,
  userListState: UserListReducer,
});

//root saga
function* RootSaga() {
  yield all([categorySaga(), authSaga(), postSaga(), imageSaga()]);
}

//create store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
