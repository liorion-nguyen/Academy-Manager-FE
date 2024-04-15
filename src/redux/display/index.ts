'use client'

import { createSlice } from "@reduxjs/toolkit";

const DisplaySlice = createSlice({
    name: 'display',
    initialState: {
        navLeft: false,
        width: null
    },
    reducers: {
        setNavLeft(state, action) {
            return {
                ...state,
                navLeft: action.payload
            }
        },
        setWidth(state, action) {
            return {
                ...state,
                width: action.payload
            }
        }
    },
})

export const DisplayActions = DisplaySlice.actions;
export default DisplaySlice.reducer;