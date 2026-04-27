import React from 'react'
import { decrement, increment } from './redux/features/counterSlice'
import {useDispatch, useSelector} from 'react-redux'

const App = () => {

  // we have two things : use dispatch to sent the action and useselector to show case the count
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button>
    </div>
  )
}

export default App