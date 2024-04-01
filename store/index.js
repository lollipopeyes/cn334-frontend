//store/index.js
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterSlice from './features/test_store/testSlice'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({counter:counterSlice}));

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
    })
}