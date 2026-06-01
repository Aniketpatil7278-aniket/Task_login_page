// src/state-management/authurization/authSaga.js

import { takeLatest, put, call } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./authActions";

import { loginUserApi } from "../../services/authApi";

// LOGIN
function* loginUser(action) {
  try {
    const user = yield call(loginUserApi, action.payload);

    sessionStorage.setItem("user", JSON.stringify(user));

    yield put({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      payload: error.message || "Login Failed",
    });
  }
}

// LOGOUT
function* logoutUser() {
  sessionStorage.removeItem("user");

  yield put({
    type: LOGOUT_SUCCESS,
  });
}

// WATCHERS
export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);

  yield takeLatest(LOGOUT_REQUEST, logoutUser);
}
