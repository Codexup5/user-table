import { persistStore } from 'redux-persist';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { UserApi } from '@/entities/user';

import { entityReducers } from './entityReducers';

const apiReducers = {
    [UserApi.reducerPath]: UserApi.reducer,
};

const rootReducer = combineReducers({ ...entityReducers, ...apiReducers });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(UserApi.middleware),
});

export const persistor = persistStore(store);
