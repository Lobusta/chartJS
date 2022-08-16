import countryReducer from './sagas/countrySaga/countrySlice'
import giniReducer from './sagas/giniSaga/giniSlice'
export const rootReducer = ({
    Country: countryReducer,
    Gini: giniReducer
})