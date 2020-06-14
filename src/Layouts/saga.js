import { takeLatest, call, put } from "redux-saga/effects"

import {getSummarySuccess} from "./actions"
import * as layoutCon from "./contants"
import Url from "../utils/Url"
import {API} from "../utils/Api"

export function* summaryGet() {
    try {
        const result = yield call(() => API.get(Url.summary))
        if (result.status === 200) {
            yield put(getSummarySuccess(result.data))
        }
    } catch (error) {
        console.log(error)
    }

}

export default function* layoutSaga() {
    yield takeLatest(layoutCon.SUMMARY,summaryGet)
}