import { all } from "redux-saga/effects"
import Layout from "../Layouts/saga"
import Home from "../Containers/Home/saga"

export default function* rootSaga() {
    yield all([
        Layout(),
        Home()
    ])
    // code after all-effect
  }