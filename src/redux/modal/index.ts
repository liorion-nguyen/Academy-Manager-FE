'use client'

import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        data: false
    },
    reducers: {
       setModal(state, action) {
            return {
                ...state,
                data: action.payload
            }
       }
    },
})

export const ModalActions = ModalSlice.actions;
export default ModalSlice.reducer;