'use client'

import { createSlice } from "@reduxjs/toolkit";

const TitleSlice = createSlice({
    name: 'title',
    initialState: {
        title: null
    },
    reducers: {
       setTitle(state, action) {
            return {
                ...state,
                title: action.payload
            }
       }
    },
})

export const TitleActions = TitleSlice.actions;
export default TitleSlice.reducer;