import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import  createSagaMiddleware  from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const preloadedState = {};

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    reducer:rootReducer,  
    preloadedState
  })
  
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;


