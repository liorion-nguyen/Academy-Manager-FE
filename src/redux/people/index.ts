'use client'

import { createSlice } from "@reduxjs/toolkit";

const PeopleSlice = createSlice({
    name: 'people',
    initialState: {
        data: null
    },
    reducers: {
       setPeople(state, action) {
            return {
                ...state,
                data: action.payload
            }
       }
    },
})

export const PeopleActions = PeopleSlice.actions;
export default PeopleSlice.reducer;