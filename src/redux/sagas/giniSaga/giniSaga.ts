

import { call, put } from "redux-saga/effects";
import { setGinis } from "./giniSlice";


 const getCountriesfromURL = async () =>{

    const data = await fetch(`https://restcountries.com/v2/all?fields=name,gini`);
    return data.json();
   
  };

export function* fetchGiniSaga():any {
  try {
    let result = yield call(getCountriesfromURL)
    yield put(setGinis(result));
  } catch (e) {
    yield put({ type: "FETCH_FAILED" });
  }
}




