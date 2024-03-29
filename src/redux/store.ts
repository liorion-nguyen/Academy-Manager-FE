'use client';
import { configureStore } from "@reduxjs/toolkit";
import message from './chat/chat';

const store = configureStore({
    reducer: {
        message: message,
    }
})

export default store;