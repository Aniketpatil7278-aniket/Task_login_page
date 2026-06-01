// src/services/authApi.js

import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users";

export const loginUserApi = async (userData) => {
  const response = await axios.get(BASE_URL);

  const user = response.data.find(
    (item) => item.email.toLowerCase() === userData.email.toLowerCase(),
  );

  if (user && user.password === userData.password) {
    return user;
  }

  throw new Error("Invalid Email or Password");
};

// import { call, put, takeLatest } from "redux-saga/effects";
// import axios from "axios";

// function* loginSaga(action) {
//   try {
//     const response = yield call(
//       axios.get,
//       "https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users",
//     );

//     const user = response.data.find((u) => u.email === action.payload.email);

//     yield put({
//       type: "LOGIN_SUCCESS",
//       payload: user,
//     });

//     sessionStorage.setItem("user", JSON.stringify(user));
//   } catch (error) {
//     yield put({
//       type: "LOGIN_FAILURE",
//       payload: error.message,
//     });
//   }
// }

// export default function* authSaga() {
//   yield takeLatest("LOGIN_REQUEST", loginSaga);
// }