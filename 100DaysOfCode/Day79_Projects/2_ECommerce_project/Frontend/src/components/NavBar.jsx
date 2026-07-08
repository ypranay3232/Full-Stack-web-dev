import React, { useState, useContext } from "react";
import { assets } from "../assets/assets"//importing all items 
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {

    //  hide the default state of menu icon
    const [visible, setvisible] = useState(false)
    const { setShowSearch, getCartCount, navigate, token, logout } = useContext(ShopContext)

    const handleProfileClick = () => {
        if (!token) {
            navigate('/login')
        }
    }

    return <>
        <div className="flex items-center justify-between py-5 font-medium">
            <Link to='/'><img src={assets.logo} className="w-36 " alt="" /></Link>

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

                <NavLink to="/" className="flex flex-col items-center gap-1" >
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
                </NavLink>

                <NavLink to="/collection" className="flex flex-col items-center gap-1" >
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
                </NavLink>

                <NavLink to="/about" className="flex flex-col items-center gap-1" >
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
                </NavLink>

                <NavLink to="/contact" className="flex flex-col items-center gap-1" >
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
                </NavLink>

            </ul>
            {/* cart and user section */}
            <div className="flex items-center gap-6">
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className="w-5 cursor-pointer " alt="" />
                <div className="group relative">
                    <img onClick={handleProfileClick} src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />
                    {token && (
                        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
                            <div className="flex flex-col gap-2 w-48 py-3 px-5 bg-white/95 backdrop-blur-md text-gray-600 rounded border border-gray-100 shadow-xl transition-all duration-300">
                                <p className="cursor-pointer hover:text-black hover:font-medium transition-colors">My Profile</p>
                                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black hover:font-medium transition-colors">My Orders</p>
                                <p onClick={logout} className="cursor-pointer hover:text-red-500 hover:font-medium transition-colors border-t pt-2 mt-1">Logout</p>
                            </div>
                        </div>
                    )}
                </div>
                <Link to='/cart' className="relative">
                    <img src={assets.cart_icon} className="w-5 min-w-5 " alt="" />
                    <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]   ">{getCartCount()}</p>
                </Link>

                {/* creating menu icon for small width devices  */}
                <img onClick={() => setvisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden " alt="" />
            </div>

            {/* creating menu elements for mobile screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
                <div className="flex flex-col text-gray-600 ">
                    <div onClick={()=>setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.dropdown_icon} className="h-4 rotate-180 cursor-pointer" alt="" />
                        <p>Back</p>
                    </div>

                    {/* now we create navlink to add items : adding on click so whenever we click on any item we will close the menu bar  */}
                    <NavLink onClick={() => setvisible(false)} className={({ isActive }) => `py-2 pl-6 border ${isActive ? 'bg-slate-100 text-black font-semibold' : ''}`} to="/">Home</NavLink>
                    <NavLink onClick={() => setvisible(false)} className={({ isActive }) => `py-2 pl-6 border ${isActive ? 'bg-slate-100 text-black font-semibold' : ''}`} to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={() => setvisible(false)} className={({ isActive }) => `py-2 pl-6 border ${isActive ? 'bg-slate-100 text-black font-semibold' : ''}`} to="/about">ABOUT</NavLink>
                    <NavLink onClick={() => setvisible(false)} className={({ isActive }) => `py-2 pl-6 border ${isActive ? 'bg-slate-100 text-black font-semibold' : ''}`} to="/contact">CONTACT</NavLink>
                </div>

            </div>
        </div>

    </>
}
export default NavBar