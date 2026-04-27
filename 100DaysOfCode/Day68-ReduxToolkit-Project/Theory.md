To understand Redux Toolkit ! 

In this project we build a Task Management App. 

so first we setup the initial project : npm create vite@latest 
now install redux : npm install @reduxjs/toolkit react-redux uuid
uuid for generating unique id's so that in reduxstore each task is stored uniquely and prevent state collision.

now install tailwindcss : just visit tailwindcss get started

--> now create a folder (either : reduxstore or features) --> inside it create a file : taskSlice.jsx

--> inside it we create a slice using createslice and to fetch data from api/db we use createAsyncThunk : used to fetch data. for async operation.

--> now inside TaskSlice.jsx : we add a initialState = {
    Tasks:[], //a task array 
    loading: false, //loading data is false
    error:null, //no error 
    status: 'All', //displaying all 
}

--> now to fetch data : here inside createAsyncThunk we use a prefix(fetchtodo) that is later used to define the status. (datafetch or loading or data rejected etc) in this we also create a call back method
const fetchdata = createasycThunk('tasks/fetchtodo', async()=>{

}) 


--> import { createSlice, createAsyncThunk, isAction } from '@reduxjs/toolkit'

export const initialState = {
    Tasks: [],
    loading: false,
    error: null,
    status: 'All',
}

const fetchTodo = createAsyncThunk('Tasks/fetchToDO', async () => {
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

    },

    // The extraReducer is built for handling actions which are outside of slice, and which are inside the slice we can define them in the reducer

    // extrareducers contain a function named builder --> and here we have only 3 states : pending,fulfilled,rejected. Here we add the state with the help of prefix(FetchToDo) 
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        }),
            builder.addCase(fetchTodo.fulfilled, (state) => {
                state.loading = false,
                state.tasks = action.payload
            }),
            builder.addCase(fetchTodo.rejected, (state) => {
                state.loading = false,
                state.tasks = action.error.message;
            })
    }
})

export default taskslice.reducer


--> now create a store.jsx inside features folder : to create a store we use configurestore method 
import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './TaskSlice'

// we use this store to fetch the records 
export const store = configureStore({
    reducer:{
        task: taskSlice
    }
})

--> now create a new folder : components --> taskList.jsx to display the tasks : here we just read the data from the store and display them here.

-->we use a useSelector() to return data from store 
const tasks = useSelector((state) => state.tasks.tasks)

--> to execute actions (like fetching data or adding tasks), we use useDispatch() 
const dispatch = useDispatch()

--> to run the fetchTodo thunk when the component loads, we use the useEffect hook:
useEffect(() => {
    dispatch(fetchTodo())
}, [dispatch])

⚠️ IMPORTANT RULE OF HOOKS: 
Hooks like `useEffect` and `useSelector` must be called at the top level of your component. 
Never call them inside loops, conditions (like `if (loading)`), or nested functions. If you return early before a hook is called, React will throw an error and your app will crash.

--> now let's add standard Reducer actions to our TaskSlice to handle Create, Update, and Delete operations!
inside TaskSlice.jsx `reducers` block:

reducers: {
    addTask: (state, action) => {
        // action.payload contains the new task object
        state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
        // action.payload contains the task ID to delete
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
        // action.payload contains the updated fields (id, title, status)
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
            state.tasks[index] = { ...state.tasks[index], ...action.payload };
        }
    }
}

--> Export the standard actions so we can use them in TaskList.jsx
export const { addTask, deleteTask, updateTask } = taskslice.actions;

--> Inside TaskList.jsx, we can now dispatch these actions:
dispatch(addTask(newTaskObject))
dispatch(deleteTask(task.id))
dispatch(updateTask({ id: task.id, status: 'Completed' }))

And that completes our full CRUD Redux Toolkit app!