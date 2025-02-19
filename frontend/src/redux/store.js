import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authorizedslice from "./authorizedslice";
import jobslice from "./jobslice"
import applicationslice from "./applicationslice"
import companyslice from "./companyslice"

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootReducer= combineReducers({
    
        auth:authorizedslice,
        job:jobslice,
        company : companyslice,
        application:applicationslice
    
})
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export default store;