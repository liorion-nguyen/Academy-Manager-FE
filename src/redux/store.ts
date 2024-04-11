'use client';
import { configureStore } from "@reduxjs/toolkit";
import message from './chat';
import people from './people';

const store = configureStore({
    reducer: {
        message: message,
        people: people
    }
})

export default store;