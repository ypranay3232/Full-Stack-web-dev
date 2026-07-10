import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

  const toggleSize = (size) => {
    setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await fetch(backendUrl + '/api/product/add', {
        method: 'POST',
        headers: {
          'token': token
        },
        body: formData
      })
      const data = await response.json()
      if (data.success) {
        toast.success(data.message)
        setName('')
        setDescription('')
        setPrice('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setSizes([])
        setBestseller(false)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3 p-8'>
      
      {/* Upload Images Section */}
      <div>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Upload Images</p>
        <div className='flex gap-3'>
          
          <label htmlFor="image1" className='cursor-pointer w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center rounded hover:border-gray-500 bg-gray-50 overflow-hidden'>
            {image1 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image1)} alt="" /> : <span className='text-xs text-gray-400'>Slot 1</span>}
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2" className='cursor-pointer w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center rounded hover:border-gray-500 bg-gray-50 overflow-hidden'>
            {image2 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image2)} alt="" /> : <span className='text-xs text-gray-400'>Slot 2</span>}
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3" className='cursor-pointer w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center rounded hover:border-gray-500 bg-gray-50 overflow-hidden'>
            {image3 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image3)} alt="" /> : <span className='text-xs text-gray-400'>Slot 3</span>}
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4" className='cursor-pointer w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center rounded hover:border-gray-500 bg-gray-50 overflow-hidden'>
            {image4 ? <img className='w-full h-full object-cover' src={URL.createObjectURL(image4)} alt="" /> : <span className='text-xs text-gray-400'>Slot 4</span>}
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>

        </div>
      </div>

      {/* Product Details */}
      <div className='w-full max-w-[500px]'>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-black bg-white' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full max-w-[500px]'>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-black bg-white' rows="3" placeholder='Write description here' required />
      </div>

      {/* Category, SubCategory, Price Row */}
      <div className='flex flex-col sm:flex-row gap-8 w-full max-w-[500px]'>
        
        <div className='flex-1'>
          <p className='mb-2 text-sm font-semibold text-gray-700'>Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded outline-none bg-white cursor-pointer'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='flex-1'>
          <p className='mb-2 text-sm font-semibold text-gray-700'>Sub category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded outline-none bg-white cursor-pointer'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className='flex-1'>
          <p className='mb-2 text-sm font-semibold text-gray-700'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-black bg-white' type="number" placeholder='25' required />
        </div>

      </div>

      {/* Sizes Section */}
      <div>
        <p className='mb-2 text-sm font-semibold text-gray-700'>Product Sizes</p>
        <div className='flex gap-3'>
          {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
            <div 
              key={size} 
              onClick={() => toggleSize(size)} 
              className={`px-3 py-1 border rounded cursor-pointer transition-colors font-medium text-sm select-none ${sizes.includes(size) ? 'bg-black text-white border-black' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className='flex gap-2 mt-2 items-center select-none cursor-pointer' onClick={() => setBestseller(prev => !prev)}>
        <input type="checkbox" checked={bestseller} readOnly className='w-4 h-4 cursor-pointer' />
        <label className='text-sm text-gray-700 cursor-pointer font-medium'>Add to bestseller</label>
      </div>

      {/* Submit Button */}
      <button type="submit" className='mt-4 bg-black text-white px-10 py-2.5 rounded font-medium hover:bg-gray-800 transition-colors cursor-pointer text-sm'>ADD PRODUCT</button>

    </form>
  )
}

export default Add
