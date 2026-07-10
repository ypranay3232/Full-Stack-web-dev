import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

  const fetchList = async () => {
    try {
      const response = await fetch(backendUrl + '/api/product/list')
      const data = await response.json()
      if (data.success) {
        setList(data.products)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await fetch(backendUrl + '/api/product/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ id })
      })
      const data = await response.json()
      if (data.success) {
        toast.success(data.message)
        await fetchList()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='p-8 w-full'>
      <p className='mb-4 text-lg font-bold text-gray-800 prata-regular'>All Products List</p>
      
      <div className='flex flex-col gap-2'>
        
        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 border border-gray-200 bg-gray-100 text-sm font-semibold text-gray-700 rounded-t'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product Items */}
        {
          list.map((item, index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 border border-gray-200 text-sm bg-white rounded shadow-sm hover:shadow transition-shadow'>
              <img className='w-12 h-12 object-cover rounded border border-gray-200' src={item.image[0]} alt="" />
              <p className='font-medium text-gray-800 pr-4'>{item.name}</p>
              <p className='text-gray-600'>{item.category}</p>
              <p className='font-medium text-gray-800'>${item.price}</p>
              <p onClick={() => removeProduct(item._id)} className='text-center md:text-center text-red-500 font-bold hover:text-red-700 hover:scale-110 cursor-pointer transition-all text-lg select-none'>X</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default List
