// src/state-management/rootSaga.js

import { all } from "redux-saga/effects";

import authSaga from "./authorization/authSaga";
export default function* rootSaga() {
  yield all([authSaga()]);
}
