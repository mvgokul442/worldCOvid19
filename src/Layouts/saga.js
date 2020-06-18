import { takeLatest, call, put } from "redux-saga/effects"

import {getSummarySuccess,getAllcountrySuccess,onLoader,getNewsdata,getWhoNewsdata} from "./actions"
import * as layoutCon from "./contants"
import Url from "../utils/Url"
import {API,API2,API3} from "../utils/Api"

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

export function* newsGet() {
    try {
        yield put(onLoader(true))
        const result = yield call(() => API3.get(Url.news))
        if (result.status === 200) {
            yield put(getNewsdata(result.data))
        }
    } catch (error) {
        yield put(onLoader(false))
        console.log(error)
    }

}

export function* whoNews() {
    try {
        yield put(onLoader(true))
        const result = yield call(() => API2.get(Url.who_news))
        if (result.status === 200) {
            yield put(getWhoNewsdata(result.data))
        }
    } catch (error) {
        yield put(onLoader(false))
        console.log(error)
    }

}

export default function* layoutSaga() {
    yield takeLatest(layoutCon.SUMMARY,summaryGet)
    yield takeLatest(layoutCon.SUMMARY,countryGet)
    yield takeLatest(layoutCon.SUMMARY,newsGet)
    yield takeLatest(layoutCon.SUMMARY,whoNews)
}