import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';

export interface User {
    index?: number;
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    phone: string;
    birthDate: string;
}
export const USER_SLICE_NAME = 'users';

export interface InitialState {
    user: Partial<User> | null;
}

export const initialState: InitialState = {
    user: null,
};

export const userModel = createSlice({
    name: USER_SLICE_NAME,
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<Partial<User | null>>) => {
            state.user = payload;
        },
    },
});

export const useUser = () =>
    useSelector(
        createSelector(
            (state: RootState) => state.userReducer.user,
            (user) => user,
        ),
    );

export const { setUser } = userModel.actions;
