import {
  GET_POST_DETAIL_LOADING,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_ERROR,
  DELETE_POST_DETAIL_SUCCESS,
} from "redux/constant/ActionType";

const initialState = {
  postDetail: {},
  isLoading: true,
  error: null,
};

export default function PostDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_DETAIL_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_POST_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        postDetail: action.payload,
      };
    }
    case GET_POST_DETAIL_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case DELETE_POST_DETAIL_SUCCESS: {
      return initialState;
    }
    default:
      return state;
  }
}

//selector
export const postsDetailSelector = (state) => state.postDetailState;
