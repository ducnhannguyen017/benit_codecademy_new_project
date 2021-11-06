import {
  GET_POSTS_BY_CATE_LOADING,
  GET_POSTS_BY_CATE_SUCCESS,
  GET_POSTS_BY_CATE_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  postsByCate: {},
  isLoading: true,
  error: null,
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_BY_CATE_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_POSTS_BY_CATE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        postsByCate: action.payload,
      };
    }
    case GET_POSTS_BY_CATE_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

//selector
export const postsByCateSelector = (state) => state.postsByCateState;
