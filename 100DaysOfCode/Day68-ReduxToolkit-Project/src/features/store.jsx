import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './TaskSlice'

// we use this store to fetch the records 
export const store = configureStore({
    reducer:{
        tasks: taskSlice
    }
})