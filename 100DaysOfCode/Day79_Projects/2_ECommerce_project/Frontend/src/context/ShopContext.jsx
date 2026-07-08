import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '$'
    const DeliveryFees = 10
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
        const mockToken = "mock-jwt-token-xyz"
        setToken(mockToken)
        localStorage.setItem('token', mockToken)
        toast.success("Logged in successfully!")
        navigate('/')
    }

    const register = async (name, email, password) => {
        if (!name || !email || !password) {
            toast.error("Please fill all fields")
            return
        }
        const mockToken = "mock-jwt-token-xyz"
        setToken(mockToken)
        localStorage.setItem('token', mockToken)
        toast.success("Account created successfully!")
        navigate('/')
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
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
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

    const value = {
        products,
        currency,
        DeliveryFees,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        token,
        setToken,
        login,
        register,
        logout
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider