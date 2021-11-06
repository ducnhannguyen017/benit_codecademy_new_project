import {
  GET_IMAGE_LIST_LOADING,
  GET_IMAGE_LIST_SUCCESS,
  GET_IMAGE_LIST_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  imageList: {},
  isLoading: true,
  error: null,
};

export default function ImageListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGE_LIST_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_IMAGE_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        imageList: action.payload,
      };
    }
    case GET_IMAGE_LIST_ERROR: {
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
export const imageListSelector = (state) => state.imageListState;
