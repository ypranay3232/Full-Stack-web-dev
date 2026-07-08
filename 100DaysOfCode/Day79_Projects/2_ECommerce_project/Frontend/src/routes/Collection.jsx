import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import SearchBar from '../components/SearchBar'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    // Sort Products
    if (sortType === 'low-high') {
      productsCopy.sort((a, b) => a.price - b.price)
    } else if (sortType === 'high-low') {
      productsCopy.sort((a, b) => b.price - a.price)
    }

    setFilterProducts(productsCopy)
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, sortType, products])

  return (
    <div>
      <SearchBar />
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        
        {/* Filter Options (Left Side) */}
        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
            FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>

          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <label className='flex gap-2 cursor-pointer items-center'>
                <input className='w-3 cursor-pointer' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
              </label>
              <label className='flex gap-2 cursor-pointer items-center'>
                <input className='w-3 cursor-pointer' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
              </label>
              <label className='flex gap-2 cursor-pointer items-center'>
                <input className='w-3 cursor-pointer' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
              </label>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden sm:block'}`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <label className='flex gap-2 cursor-pointer items-center'>
                <input className='w-3 cursor-pointer' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
              </label>
              <label className='flex gap-2 cursor-pointer items-center'>
                <input className='w-3 cursor-pointer' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
              </label>
              <label className='flex gap-2 cursor-pointer items-center'>
                <input className='w-3 cursor-pointer' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
              </label>
            </div>
          </div>
        </div>

        {/* Product Display (Right Side) */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL '} text2={'COLLECTIONS'} />
            
            {/* Sort Dropdown */}
            <div className='relative inline-block'>
              <select onChange={(e) => setSortType(e.target.value)} className='appearance-none border border-gray-300 text-sm pl-4 pr-10 py-2 outline-none bg-white rounded cursor-pointer hover:border-gray-500 transition-colors focus:ring-1 focus:ring-black'>
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500'>
                <img className='h-2.5 w-2.5 rotate-90' src={assets.dropdown_icon} alt="" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection