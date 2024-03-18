import { configureStore } from '@reduxjs/toolkit';
import { userslice } from './userslice';

const store = configureStore({
    reducer:{
        user : userslice.reducer
    }
})

export default store