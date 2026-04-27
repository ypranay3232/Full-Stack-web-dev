import {configureStore} from '@reduxjs/toolkit'
import counterreducer from './features/counterSlice'

// create a store and inside it we have reducers : now go to parent(main.jsx) and provide this store
export const store = configureStore({
    reducer:{
        counter:counterreducer
    }
})