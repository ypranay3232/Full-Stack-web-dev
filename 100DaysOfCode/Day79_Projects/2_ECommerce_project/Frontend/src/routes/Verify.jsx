import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Verify = () => {
  const { navigate, token, backendUrl, setCartItems } = useContext(ShopContext)
  const [searchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      if (!token) return

      const response = await fetch(backendUrl + '/api/order/verifyStripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ success, orderId })
      })

      const data = await response.json()
      if (data.success) {
        setCartItems({})
        toast.success(data.message || "Payment Successful!")
        navigate('/orders')
      } else {
        toast.error(data.message || "Payment Failed")
        navigate('/cart')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      navigate('/cart')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [token])

  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center gap-4'>
      <div className='w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin'></div>
      <p className='text-gray-500 text-sm font-medium'>Verifying your transaction, please wait...</p>
    </div>
  )
}

export default Verify
