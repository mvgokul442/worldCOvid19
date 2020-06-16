import { takeLatest, call, put } from "redux-saga/effects"

import {getSummarySuccess,getAllcountrySuccess,onLoader} from "./actions"
import * as layoutCon from "./contants"
import Url from "../utils/Url"
import {API} from "../utils/Api"

export function* summaryGet() {
    try {
        yield put(onLoader(true))
        const result = yield call(() => API.get(Url.summary))
        yield put(onLoader(false))
        if (result.status === 200) {
            yield put(getSummarySuccess(result.data))
        }
    } catch (error) {
        yield put(onLoader(false))
        console.log(error)
    }

}
export function* countryGet() {
    try {
        yield put(onLoader(true))
        const result = yield call(() => API.get(Url.allCountries))
        if (result.status === 200) {
            yield put(getAllcountrySuccess(result.data))
        }
    } catch (error) {
        yield put(onLoader(false))
        console.log(error)
    }

}

export default function* layoutSaga() {
    yield takeLatest(layoutCon.SUMMARY,summaryGet)
    yield takeLatest(layoutCon.SUMMARY,countryGet)
}