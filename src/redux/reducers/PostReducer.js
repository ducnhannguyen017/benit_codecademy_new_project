import {
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  post: {},
  isLoading: true,
  error: null,
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        post: action.payload,
      };
    }
    case GET_ALL_POSTS_ERROR: {
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
export const allPostSelector = (state) => state.postState;

export const selectPostByTag = (tag) => (state) => {
  console.log(tag);
  console.log(allPostSelector(state));
  const postList = allPostSelector(state);
  return postList.filter((element) => element.category.tag === tag);
};

export const selectPostBySearchTerm = (searchTerm) => (state) => {
  console.log(searchTerm);
  console.log(allPostSelector(state));
  const postList = allPostSelector(state);
  if (postList.post.data !== undefined) {
    return postList.post.data.filter((element) =>
      element.title.toLowerCase().includes(searchTerm)
    );
  }
};
