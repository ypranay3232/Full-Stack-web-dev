import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '$'
    const DeliveryFees = 10
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate()

    const login = async (email, password) => {
        if (!email || !password) {
            toast.error("Please fill all fields")
            return
        }
        try {
            const response = await fetch(backendUrl + '/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const data = await response.json()
            if (data.success) {
                setToken(data.token)
                localStorage.setItem('token', data.token)
                toast.success("Logged in successfully!")
                navigate('/')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const register = async (name, email, password) => {
        if (!name || !email || !password) {
            toast.error("Please fill all fields")
            return
        }
        try {
            const response = await fetch(backendUrl + '/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            const data = await response.json()
            if (data.success) {
                setToken(data.token)
                localStorage.setItem('token', data.token)
                toast.success("Account created successfully!")
                navigate('/')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const logout = () => {
        setToken('')
        localStorage.removeItem('token')
        setCartItems({})
        toast.success("Logged out successfully!")
        navigate('/login')
    }

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select Product Size")
            return
        }

        let cartData = structuredClone(cartItems)

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)

        if (token) {
            try {
                const response = await fetch(backendUrl + '/api/cart/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    body: JSON.stringify({ itemId, size })
                })
                const data = await response.json()
                if (!data.success) {
                    toast.error(data.message)
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (err) {
                    console.error(err)
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)

        if (token) {
            try {
                const response = await fetch(backendUrl + '/api/cart/update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    body: JSON.stringify({ itemId, size, quantity })
                })
                const data = await response.json()
                if (!data.success) {
                    toast.error(data.message)
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
            if (!itemInfo) continue;
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (err) {
                    console.error(err)
                }
            }
        }
        return totalAmount
    }

    const getProductsData = async () => {
        try {
            const response = await fetch(backendUrl + '/api/product/list')
            const data = await response.json()
            if (data.success) {
                setProducts(data.products)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async (userToken) => {
        try {
            const response = await fetch(backendUrl + '/api/cart/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': userToken
                }
            })
            const data = await response.json()
            if (data.success) {
                setCartItems(data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        } else if (token) {
            getUserCart(token)
        }
    }, [token])

    const value = {
        products,
        currency,
        DeliveryFees,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        token,
        setToken,
        login,
        register,
        logout,
        backendUrl
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider