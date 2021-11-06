import {
  GET_USER_BY_ID_LOADING,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  userById: {},
  isLoading: true,
  error: null,
};

export default function UserByIdReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_BY_ID_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_USER_BY_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        userById: action.payload,
      };
    }
    case GET_USER_BY_ID_ERROR: {
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
export const userByIdSelector = (state) => state.userByIdState;
