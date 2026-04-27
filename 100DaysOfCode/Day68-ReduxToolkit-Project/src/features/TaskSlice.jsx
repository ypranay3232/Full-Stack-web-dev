import { createSlice, createAsyncThunk, isAction } from '@reduxjs/toolkit'

export const initialState = {
    tasks: [],
    loading: false,
    error: null,
    status: 'All',
}

export const fetchTodo = createAsyncThunk('Tasks/fetchToDO', async () => {
    // limiting the fetch to 5 and convert this to json format
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await response.json()
    // now we define the fields of tasks : userid, id, title, completed, now return the fields using a map
    return data.map(task => (
        {
            id: task.id,
            title: task.title,
            description: '',
            status: task.completed ? "Completed" : "TO DO" //if the status is completed we assign completed else we assign a TO DO
        }
    ))
})

// now create a slice : fetchtodo is not a part of slice its outside of slice so we use extraReducer
const taskslice = createSlice({
    name: 'tasks',
    initialState,
    reducers: { //a reducer is nothing but a function with state and action 
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = { ...state.tasks[index], ...action.payload };
            }
        }
    },

    // The extraReducer is built for handling actions which are outside of slice, and which are inside the slice we can define them in the reducer

    // extrareducers contain a function named builder --> and here we have only 3 states : pending,fulfilled,rejected. Here we add the state with the help of prefix(FetchToDo) 
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        })
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const { addTask, deleteTask, updateTask } = taskslice.actions;
export default taskslice.reducer