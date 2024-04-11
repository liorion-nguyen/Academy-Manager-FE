'use client';
import { configureStore } from "@reduxjs/toolkit";
import message from './chat';
import people from './people';
import user from './user';

const store = configureStore({
    reducer: {
        message: message,
        people: people,
        user: user
    }
})

export default store;