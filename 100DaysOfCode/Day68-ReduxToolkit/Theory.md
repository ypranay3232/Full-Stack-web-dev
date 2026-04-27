# Redux Toolkit Theory

## Why do we need Redux?
In React, state management can become a problem. Normally, to update a small part of the UI (e.g., changing an "Add to Cart" button to "1"), React updates the state locally, and re-renders the component. 

However, we face issues with data flow. In React, data flows unidirectionally from parent to child:
```text
App 
 └── Header 
      └── Navbar
```
**Prop Drilling:** When we need to pass props to deep child components (e.g., from `App` to `Navbar`), we must pass them through intermediate components (like `Header`) even if those intermediate components don't need the data. 

To avoid prop drilling and manage state globally, we use **Redux** (or similar state management libraries). 

Redux was introduced in 2015, but its syntax was complex and required a lot of boilerplate code (it took a long time to set up). To solve this, **Redux Toolkit (RTK)** was created as the modern, recommended way to write Redux logic.

Redux works as a centralized data store where we keep all our global state. Any component that needs the data can access it directly from the store, without prop drilling.

## Redux Architecture
1. **UI**: A user interacts with the UI (e.g., clicks a "Theme" button).
2. **Event Handler**: The event handler is triggered and **dispatches** an **Action**.
3. **Action**: The action describes what happened.
4. **Reducer**: The reducer receives the action and updates the state in the **Redux Store**.
5. **Redux Store**: The central storage updates.
6. **UI Update**: The components subscribed to the store re-render with the new data.

```text
UI (Button Click)  ──────>  Dispatch Action  
     ^                             │  
     │                             v  
Update State  <───────  Reducer (Updates Store)  
```

## Setup Guide

1. **Installation:**
   Install Redux Toolkit and React-Redux:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. **Setup Store:**
   Create a folder named `redux` and a file named `store.js` inside it. This centralizes your data.
   ```javascript
   // src/redux/store.js
   import { configureStore } from '@reduxjs/toolkit'
   import counterReducer from './features/counterSlice'

   export const store = configureStore({
       reducer: {
           counter: counterReducer
       }
   })
   ```

3. **Provide Store to App:**
   Go to your root file (e.g., `main.jsx`) and wrap your app with the `<Provider>` component.
   ```javascript
   // src/main.jsx
   import { store } from './redux/store.js'
   import { Provider } from 'react-redux'

   <Provider store={store}>
       <App />
   </Provider>
   ```

4. **Create a Slice:**
   Create a folder `features` inside `redux`. Add a file like `counterSlice.js`. A slice represents a specific feature's state and logic.
   ```javascript
   // src/redux/features/counterSlice.js
   import { createSlice } from "@reduxjs/toolkit";

   export const counterSlice = createSlice({
       name: 'counter',
       initialState: {
           value: 0
       },
       reducers: {
           increment: (state) => {
               state.value += 1
           },
           decrement: (state) => {
               state.value -= 1
           }
       }
   })

   // Export actions for components to use
   export const { increment, decrement } = counterSlice.actions;
   // Export reducer to add to the store
   export default counterSlice.reducer;
   ```

5. **Implement UI:**
   Use `useDispatch` to send actions and `useSelector` to read state.
   ```javascript
   // src/App.jsx
   import React from 'react'
   import { decrement, increment } from './redux/features/counterSlice'
   import { useDispatch, useSelector } from 'react-redux'

   const App = () => {
       const dispatch = useDispatch()
       const count = useSelector((state) => state.counter.value)

       return (
           <div>
               <h1>{count}</h1>
               <button onClick={() => dispatch(increment())}>Increment</button>
               <button onClick={() => dispatch(decrement())}>Decrement</button>
           </div>
       )
   }

   export default App
   ```