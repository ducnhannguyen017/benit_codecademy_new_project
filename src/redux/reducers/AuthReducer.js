import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  auth: {},
  isLoading: true,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING: {
      return { ...state, isLoading: true };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        auth: action.payload,
      };
    }
    case AUTH_ERROR: {
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
export const authSelector = (state) => state.authState;
