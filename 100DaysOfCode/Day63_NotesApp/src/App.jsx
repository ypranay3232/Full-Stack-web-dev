import React, { useState } from 'react';
import { Plus, X } from 'lucide-react'

const App = () => {
  // now create a usestate and false by default which hides the form
  const [show, setshow] = useState(false)
  // more use state to change the tile and desc
  const [title, settitle] = useState("")
  const [des, setdes] = useState("")
  // now to store notes 
  const [tasks, settasks] = useState([])


  const submithandler = (e) => {
    e.preventDefault()
    // we can also use this on submit func to clear title and sec
    settitle("")
    setdes("")

    // now for each new notes push them 
    let newnotes = [...tasks]
    newnotes.push({ title, des })
    settasks(newnotes)
    setshow(false) // Closing popup after adding
  }

  // Now remove notes
  const removeNote = (indexToRemove) => {
    settasks(tasks.filter((_, index) => index !== indexToRemove))
  }

  return <>

    <div className="relative bg-zinc-900 text-white w-full min-h-screen p-15 ">
      <div className="max-w-300 mx-auto my-0 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

        <div onClick={() => {
          setshow(!show)
        }}
          className="card min-h-60 bg-zinc-800 border-white border-dashed border-2 rounded-2xl flex items-center justify-center flex-col gap-1 p-5 cursor-pointer hover:scale-105 duration-300">
          {/* now install lucide react icons */}
          <Plus className='w-10 h-10 rounded-full bg-sky-500' />
          <p className='text-zinc-400 tracking-wide'>Add a new Note</p>
        </div>


        {/* Popup notes when clicked on new notes : when clicked on Add new note the popup appears   */}
        {show && (
          < div className="popup fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-96 border-white rounded-2xl border p-4 bg-zinc-800 z-50 shadow-2xl">
            <div className='flex justify-between items-center mb-2 px-2'>
              <h3 className='text-lg font-bold tracking-wide text-white'>Add a new note.</h3>
              <X onClick={() => setshow(false)} className='cursor-pointer hover:text-red-500 w-5 h-5' />
            </div>
            <form
              // prevent the page reload (use preventDefault property) so each time we submit the form btn page wont reload.
              onSubmit={(e) => {
                submithandler(e)
              }}

              action="" className='flex flex-col items-center p-2 gap-3'>
              <input
                value={title}
                onChange={(e) => {
                  settitle(e.target.value)
                }}
                className='w-full rounded-md border border-white/20 px-4 py-2 bg-zinc-900 focus:border-sky-500 outline-none' type="text" name='title' id='' placeholder='Enter Notes Title...' />

              <textarea
                value={des}
                onChange={(e) => {
                  setdes(e.target.value)
                }}
                className='w-full rounded-md border border-white/20 px-4 py-2 bg-zinc-900 focus:border-sky-500 outline-none' name="desc" id="" rows={4} placeholder='Enter Notes...'></textarea>

              <button type="submit" className='bg-blue-500 px-4 py-2 mt-2 rounded-xl w-full font-bold tracking-wide cursor-pointer hover:bg-blue-600 transition-colors'>Add Note </button>

            </form>
          </div>)
        }

        {tasks.map((item, index) => {
          return <div key={index} className="card relative min-h-60 bg-zinc-800 border-white/10 border-2 rounded-2xl flex flex-col gap-1 p-6 hover:scale-105 duration-300 ">
            <button
              onClick={() => removeNote(index)}
              className='absolute top-4 right-4 bg-red-500/20 hover:bg-red-500 p-2 rounded-full text-red-500 hover:text-white transition-all duration-200 group'
            >
              <X size={20} strokeWidth={3} />
            </button>

            <h1 className='text-2xl font-bold tracking-wide pr-10'>{item.title}</h1>
            <p className='text-zinc-400 font-medium tracking-wide mt-2 leading-relaxed'>{item.des}</p>

          </div>
        })}
      </div>
    </div >

  </>
};

export default App;