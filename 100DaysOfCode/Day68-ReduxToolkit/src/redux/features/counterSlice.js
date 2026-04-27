import { createSlice } from "@reduxjs/toolkit";

// here we have to provide initial state value and also create a reducer
export const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        value: 0
    },
    // it contains the change of state 
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

// in simple words export two counterslice (feature) actions and also export the reducer
export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer