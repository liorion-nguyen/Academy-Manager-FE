'use client'

import { createSlice } from "@reduxjs/toolkit";

const DrawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        message: false,
    },
    reducers: {
        setDrawerMessage(state, action) {
            return {
                ...state,
                message: action.payload
            }
        },
    },
})

export const DrawerActions = DrawerSlice.actions;
export default DrawerSlice.reducer;