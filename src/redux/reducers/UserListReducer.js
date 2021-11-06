import {
  GET_USER_LIST_LOADING,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_ERROR,
} from "redux/constant/ActionType";

const initialState = {
  userList: {},
  isLoading: true,
  error: null,
};

export default function userListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        userList: action.payload,
      };
    }
    case GET_USER_LIST_ERROR: {
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
export const userListSelector = (state) => state.userListState;
