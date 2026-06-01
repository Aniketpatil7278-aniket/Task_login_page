// src/state-management/authurization/authReducer.js

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./authActions";
const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
     // LOGIN FAILURE
    case LOGIN_FAILURE:
        return {
         ...state,
        loading: false,
        error: action.payload,
      };
      
    // LOGOUT
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
