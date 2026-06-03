// src/state-management/authurization/authReducer.js

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "./authActions";

let storedUser = null;

try {
  const userData = sessionStorage.getItem("user");

  if (userData && userData !== "undefined") {
    storedUser = JSON.parse(userData);
  }
} catch (error) {
  console.error("Invalid user data in sessionStorage:", error);
}
const initialState = {
  user: storedUser || null,
  loading: false,
  error: null,
  isAuthenticated: !!storedUser,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
