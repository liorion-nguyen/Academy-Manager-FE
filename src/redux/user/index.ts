'use client'

import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        data: null
    },
    reducers: {
       setUser(state, action) {
            return {
                ...state,
                data: action.payload
            }
       }
    },
})

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;