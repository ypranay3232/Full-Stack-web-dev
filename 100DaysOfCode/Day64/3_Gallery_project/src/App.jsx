import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  // const getdata = () =>{
  //   console.log("request sent")
  // }

  // Now go to lorempixel and get the api and also install axios we can also work with fetch but i feel like using axios

  // We have some special methods which are used in every api call. 1) Get : getting data from a api (retrieve data) 2)POST : used to send a request to backend (create a new resource) 3) PUT : used to update a resource by sending a new object 4) Patch : update only specific fields (partial update) 5) Delete : remove resource 


  const [Images, setImages] = useState([])
  const [Page, setPage] = useState(1) // Track the current page

  const GetData = async () => {
    // post (url where to send request, what data to send )
    const resp = await axios.get(`https://picsum.photos/v2/list?page=${Page}&limit=20`)
    // console.log(resp);
    // axios wraps the response in a 'data' object
    setImages(resp.data)

  }

  // Automatically fetch data when the Page changes
  useEffect(() => {
    if (Images.length > 0) GetData()
  }, [Page])

  // So what we do is initially we show No images available. 

  let initial_hero = 'No Images Available click above button to get images '

  // now we change it with a simple if condition.
  if (Images.length > 0) {
    initial_hero = Images.map(function (elem, i) {
      const optimizedUrl = `https://picsum.photos/id/${elem.id}/400/400`

      return (
        <div key={i} className='flex flex-col items-center bg-zinc-900 p-2 rounded-lg border border-zinc-800 cursor-pointer'>
          <img
            loading="lazy"
            src={optimizedUrl}
            className='aspect-square w-full object-cover rounded'
            alt={elem.author}
          />
          <p className='text-xs text-gray-400 mt-2 truncate w-full text-center'>{elem.author}</p>
        </div>
      )
    })
  }

  return (
    <div className='bg-black min-h-screen text-white p-4'>

      <div className='flex gap-4 mb-6 sticky top-0 bg-black/80 py-2 backdrop-blur-sm z-10'>
        <button onClick={GetData}
          className='bg-green-600 active:scale-95 px-5 py-2 rounded text-white cursor-pointer font-bold'>
          {Images.length > 0 ? 'Refresh' : 'Get Images'}
        </button>

        {Images.length > 0 && (
          <div className='flex gap-2'>
            <button
              disabled={Page <= 1}
              onClick={() => setPage(prev => prev - 1)}
              className='bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 px-4 py-2 rounded'>
              Previous
            </button>
            <span className='flex items-center px-2'>Page {Page}</span>
            <button
              onClick={() => setPage(prev => prev + 1)}
              className='bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded'>
              Next
            </button>
          </div>
        )}
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {initial_hero}
      </div>


    </div>
  )
}

export default App