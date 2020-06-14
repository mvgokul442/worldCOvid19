import { takeLatest, call, put } from "redux-saga/effects"
// import {} from "./actions"
import * as homeCon from "./contants"
import Url from "../../utils/Url"
import {API} from "../../utils/Api"
import {getByCountrySuccess} from "./actions"

// export function* getConInfo(actions) {
//     try {
//         const result = yield call(() => API.get(Url.getbycountry+actions.countryName+"/status/confirmed/live"))
//         if (result.status === 200) {
//             yield put(getByCountrySuccess(result.data))
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }

export default function* HomeSaga() {
    // yield takeLatest(homeCon.GET_BY_COUNTRY,getConInfo)
}