'use client';
import { configureStore } from "@reduxjs/toolkit";
import message from './chat';
import people from './people';
import user from './user';
import title from './title';
import modal from './modal';
import display from './display';
import drawer from './drawer';

const store = configureStore({
    reducer: {
        message: message,
        people: people,
        user: user,
        title: title,
        modal: modal,
        display: display,
        drawer: drawer
    }
})

export default store;