import {
  GET_POSTS_BY_USER_LOADING,
  GET_POSTS_BY_USER_SUCCESS,
  GET_POSTS_BY_USER_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  postsByUser: {},
  isLoading: true,
  error: null,
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_BY_USER_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_POSTS_BY_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        postsByUser: action.payload,
      };
    }
    case GET_POSTS_BY_USER_ERROR: {
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
export const postsByUserSelector = (state) => state.postsByUserState;
