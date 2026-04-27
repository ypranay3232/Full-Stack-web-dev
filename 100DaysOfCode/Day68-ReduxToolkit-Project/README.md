# Day 68 Project: Redux Toolkit Task Manager

Welcome to the Task Manager project! This project demonstrates how to effectively use **Redux Toolkit** and **React-Redux** to manage state in a React application. 

## Features
- **Fetch Tasks via API**: Uses `createAsyncThunk` to fetch initial tasks from JSONPlaceholder.
- **Add Tasks**: Dispatch actions to add new tasks to the global state.
- **Edit Tasks**: Inline editing mode to update task titles and descriptions.
- **Delete Tasks**: Remove tasks from the list entirely.
- **Status Toggling**: Switch tasks between "TO DO" and "Completed".
- **Premium UI**: Uses advanced Vanilla CSS for a beautiful, glassmorphism-inspired design with custom animations.

## Tech Stack
- **React 19**
- **Vite**
- **Redux Toolkit** (`@reduxjs/toolkit`)
- **React-Redux**
- **Vanilla CSS**

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Learning Outcomes
- Understanding the Redux flow: Store, Slices, Reducers, Actions.
- Managing asynchronous logic using `createAsyncThunk` and `extraReducers`.
- Using `useSelector` to read state and `useDispatch` to trigger state changes.
- Understanding the rules of React Hooks (e.g., calling hooks unconditionally).
