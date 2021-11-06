import {
  UPLOAD_AVATAR_LOADING,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  uploadAvatar: {},
  isLoading: true,
  error: null,
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_AVATAR_LOADING: {
      return { ...state, isLoading: true };
    }
    case UPLOAD_AVATAR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        uploadAvatar: action.payload,
      };
    }
    case UPLOAD_AVATAR_ERROR: {
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
export const uploadAvatarSelector = (state) => state.uploadAvatarState;
