

import { call, put } from "redux-saga/effects";
import { setCountries } from "./countrySlice";


 const getCountriesfromURL = async () =>{

    const data = await fetch(`https://restcountries.com/v2/all?fields=name,population`);
    return data.json();
   
  };

export function* fetchDataSaga():any {
  try {
    let result = yield call(getCountriesfromURL)
    yield put(setCountries(result));
  } catch (e) {
    yield put({ type: "FETCH_FAILED" });
  }
}




