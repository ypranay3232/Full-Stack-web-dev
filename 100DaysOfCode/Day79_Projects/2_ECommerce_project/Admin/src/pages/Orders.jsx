import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

  const fetchAllOrders = async () => {
    try {
      if (!token) return

      const response = await fetch(backendUrl + '/api/order/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      })
      const data = await response.json()
      if (data.success) {
        setOrders(data.orders.reverse())
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    const status = event.target.value
    try {
      const response = await fetch(backendUrl + '/api/order/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ orderId, status })
      })
      const data = await response.json()
      if (data.success) {
        toast.success(data.message)
        await fetchAllOrders()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className='p-8 w-full'>
      <p className='mb-4 text-lg font-bold text-gray-800 prata-regular'>All Customer Orders</p>
      
      <div className='flex flex-col gap-4'>
        {
          orders.map((order, index) => (
            <div key={index} className='grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_1fr_1fr_1.2fr] items-start gap-5 p-5 md:p-8 border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow transition-shadow text-sm text-gray-700'>
              
              {/* Order Box Icon */}
              <div className='hidden lg:flex items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded'>
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>

              {/* Items List */}
              <div>
                <p className='font-semibold text-gray-800 mb-2'>Items Details:</p>
                <div className='flex flex-col gap-1 pl-2 border-l-2 border-gray-200'>
                  {
                    order.items.map((item, itemIdx) => (
                      <p key={itemIdx} className='py-0.5 text-xs sm:text-sm text-gray-600'>
                        {item.name} x {item.quantity} <span className='text-xs font-semibold bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 ml-1'>{item.size}</span>
                      </p>
                    ))
                  }
                </div>
                <p className='mt-3 text-xs text-gray-400'>Date: {new Date(order.date).toLocaleString()}</p>
              </div>

              {/* Shipping Address & Customer details */}
              <div>
                <p className='font-semibold text-gray-800 mb-2'>Customer Info:</p>
                <p className='font-medium text-gray-900'>{order.address.firstName + " " + order.address.lastName}</p>
                <div className='mt-1 text-xs text-gray-600 space-y-0.5'>
                  <p>{order.address.street}</p>
                  <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + " - " + order.address.zipcode}</p>
                  <p className='font-medium text-gray-800 mt-1'>Phone: {order.address.phone}</p>
                  <p className='text-gray-500'>Email: {order.address.email}</p>
                </div>
              </div>

              {/* Order Status & Pricing */}
              <div>
                <p className='font-semibold text-gray-800 mb-2'>Payment Details:</p>
                <p className='text-base font-bold text-gray-900'>${order.amount}</p>
                <div className='mt-1 space-y-1 text-xs'>
                  <p className='text-gray-600'>Method: <span className='font-semibold'>{order.paymentMethod}</span></p>
                  <p>
                    Status: <span className={`font-semibold px-2 py-0.5 rounded text-[10px] ${order.payment ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {order.payment ? 'Paid' : 'Pending'}
                    </span>
                  </p>
                </div>
              </div>

              {/* Order Status Selector */}
              <div>
                <p className='font-semibold text-gray-800 mb-2'>Shipment Track:</p>
                <div className='relative inline-block w-full'>
                  <select 
                    onChange={(e) => statusHandler(e, order._id)} 
                    value={order.status} 
                    className='appearance-none w-full border border-gray-300 rounded px-3 py-2 outline-none bg-white cursor-pointer hover:border-gray-500 text-xs sm:text-sm transition-colors focus:ring-1 focus:ring-black'
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400'>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
