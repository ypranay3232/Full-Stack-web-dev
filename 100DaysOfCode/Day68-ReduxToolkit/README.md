# Day 68: Redux Toolkit Counter

This is the Day 68 project of my 100 Days of Code challenge. It demonstrates how to set up and use **Redux Toolkit** in a React application by building a simple counter.

## Project Overview

In this project, I moved away from standard React state management (`useState`) to understand global state management using **Redux Toolkit** and `react-redux`. The application features a counter that can be incremented and decremented, with its state stored centrally.

### Key Concepts Learned
- **Why Redux?**: Solving the "prop drilling" problem and managing application state globally.
- **Redux Architecture**: Understanding the flow of Actions -> Reducers -> Store -> UI Updates.
- **Redux Toolkit (RTK)**: Setting up a store using `configureStore` and creating state slices using `createSlice`.
- **React-Redux**: Connecting the React application to the Redux store using the `<Provider>` component.
- **Hooks**: Utilizing `useDispatch` to send actions and `useSelector` to read data from the store.

## Setup Instructions

1. **Clone the repository and navigate to the project directory:**
   ```bash
   cd Day68-ReduxToolkit
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Folder Structure

- `src/redux/store.js`: The central Redux store configuration.
- `src/redux/features/counterSlice.js`: The Redux slice containing the counter state, actions, and reducer logic.
- `src/App.jsx`: The main UI component that interacts with the Redux store using `useDispatch` and `useSelector`.
- `src/main.jsx`: The entry point where the React app is wrapped with the Redux `<Provider>`.

## Notes
For a deeper dive into the theory and concepts behind Redux and Redux Toolkit, please refer to the `Theory.md` file included in this directory.
