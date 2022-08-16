import { takeEvery } from "redux-saga/effects"
import { fetchDataSaga } from "./sagas/countrySaga/countrySaga"
import { fetchGiniSaga } from "./sagas/giniSaga/giniSaga";



export default function* rootSaga () {
    yield takeEvery("GET_COUNTRIES", fetchDataSaga);
    yield takeEvery("GET_GINIS", fetchGiniSaga);
}