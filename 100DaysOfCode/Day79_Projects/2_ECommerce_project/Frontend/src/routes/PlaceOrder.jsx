import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, DeliveryFees, products } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      if (orderItems.length === 0) {
        toast.error("Your cart is empty")
        return
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + DeliveryFees
      }

      switch (method) {
        // API Call for COD
        case 'cod':
          const response = await fetch(backendUrl + '/api/order/place', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'token': token
            },
            body: JSON.stringify(orderData)
          })
          const data = await response.json()
          if (data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(data.message)
          }
          break

        // API Call for Stripe
        case 'stripe':
          const responseStripe = await fetch(backendUrl + '/api/order/stripe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'token': token
            },
            body: JSON.stringify(orderData)
          })
          const dataStripe = await responseStripe.json()
          if (dataStripe.success) {
            window.location.replace(dataStripe.session_url)
          } else {
            toast.error(dataStripe.message)
          }
          break

        // API Call for Razorpay
        case 'razorpay':
          const responseRazorpay = await fetch(backendUrl + '/api/order/razorpay', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'token': token
            },
            body: JSON.stringify(orderData)
          })
          const dataRazorpay = await responseRazorpay.json()
          if (dataRazorpay.success) {
            const options = {
              key: import.meta.env.VITE_RAZORPAY_KEY_ID,
              amount: dataRazorpay.order.amount,
              currency: dataRazorpay.order.currency,
              name: 'Etoffe de Luxe',
              description: 'Payment for Order',
              order_id: dataRazorpay.order.id,
              handler: async (response) => {
                try {
                  const verifyRes = await fetch(backendUrl + '/api/order/verifyRazorpay', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'token': token
                    },
                    body: JSON.stringify({ razorpay_order_id: response.razorpay_order_id })
                  })
                  const verifyData = await verifyRes.json()
                  if (verifyData.success) {
                    setCartItems({})
                    navigate('/orders')
                  } else {
                    toast.error(verifyData.message)
                  }
                } catch (error) {
                  console.log(error)
                  toast.error(error.message)
                }
              }
            }
            const rzp = new window.Razorpay(options)
            rzp.open()
          } else {
            toast.error(dataRazorpay.message)
          }
          break

        default:
          break
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-12 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* Delivery Information (Left side) */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY '} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input required name='firstName' onChange={onChangeHandler} value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChangeHandler} value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input required name='city' onChange={onChangeHandler} value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required name='zipcode' onChange={onChangeHandler} value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input required name='country' onChange={onChangeHandler} value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
      </div>

      {/* Cart Summary & Payment (Right side) */}
      <div className='mt-8'>
        
        <div className='min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT '} text2={'METHOD'} />
          
          {/* Payment Methods */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm active:bg-gray-700 cursor-pointer'>PLACE ORDER</button>
          </div>
        </div>

      </div>

    </form>
  )
}

export default PlaceOrder