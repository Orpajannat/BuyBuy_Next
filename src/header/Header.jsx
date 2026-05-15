"use client"
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const getCurrentUser = () => {
    if (typeof window === "undefined") return null
    return JSON.parse(localStorage.getItem("currentUser") || "null")
}


export const Header = () => {
    const[menuOpen, setMenuOpen]= useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [wishOpen, setWishOpen] = useState(false);
    const { cartCount, wishCount, cartItems, wishlistItems, removeFromWishlist } = useCart();

    const [user, setUser] = useState(getCurrentUser())

  return (
    <div className="relative flex flex-col xl:rounded-t-xl bg-purple-700 text-yellow-100 pb-20">
        <div className="flex items-center justify-between md:p-10 p-5">
            <div className="font-bold md:text-3xl text-2xl">
                <Link href="/"><h1>BuyBuy</h1></Link>
            </div>
            <div className="hidden md:flex items-center lg:gap-10 gap-1">
                <div className="font-semibold hover:bg-gray-300 hover:rounded-xl px-4 py-1 hover:text-black">
                    <Link href="/home">Home</Link>
                </div>
                <div className="font-semibold hover:bg-gray-300 hover:rounded-xl px-4 py-1 hover:text-black">
                    <Link href="/statistics">Statistics</Link>
                </div>
                <div className="font-semibold hover:bg-gray-300 hover:rounded-xl px-4 py-1 hover:text-black">
                    <Link href="/dashboard">Dashboard</Link>
                </div>
                <div className="font-semibold hover:bg-gray-300 hover:rounded-xl px-4 py-1 hover:text-black">
                    <Link href="/faq">FAQ</Link>
                </div>
                <div className="font-semibold hover:bg-gray-300 hover:rounded-xl px-4 py-1 hover:text-black">
                    <Link href="/tips">Tips</Link>
                </div>
            </div>

            <div className="md:hidden absolute left-6 top-20 flex flex-col items-center justify-center border rounded bg-white/80">
                <button onClick={()=> setMenuOpen(!menuOpen)} className="font-semibold relative px-2">☰</button>
                <div className={`absolute flex flex-col bg-white/80 p-2 rounded text-black font-semibold -bottom-21 left-10 ${menuOpen? "opacity:100 scale:100" : "opacity-0 scale-0"} transition duration-500 ease-in-out`}>
                    <a href="home">Home</a>
                    <a href="statistics">Statistics</a>
                    <a href="dashboard">Dashboard</a>
                    <a href="faq">FAQ</a>
                    <a href="tips">Tips</a>
                </div>
                {!user ? (
                    <Link href="/login">
                        <button className="md:hidden block bg-yellow-600 hover:bg-yellow-800 text-white text-md font-medium md:p-4 p-1 md:rounded-xl rounded transition">
                            Login
                        </button>
                    </Link>
                ):(
                    <button onClick={() => {
                        localStorage.removeItem("currentUser")
                        setUser(null)
                        window.location.reload()
                    }}
                        className="md:hidden block bg-red-500 hover:bg-red-700 text-white text-md font-medium md:p-4 p-1 md:rounded-xl rounded transition">
                            Logout
                    </button>
                )}
            </div>
            <div className="flex lg:gap-10 md:gap-2">
                <div>
                    <div className="relative">
                        <div onClick={() => setCartOpen(!cartOpen)} className="relative md:border md:bg-white md:rounded-full lg:p-4 md:p-2 sm:p-0 cursor-pointer">
                           <p>🛍️</p>
                           {cartCount > 0 && (
                               <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[11px] font-bold min-w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-purple-700 px-1">
                                   {cartCount}
                                </span>
                            )}
                        </div>

                        {cartOpen && (
                            <div className="absolute md:right-0 left-0 mt-2 md:w-72 w-40 bg-white text-black rounded-xl shadow-xl z-50 p-4">
                                <h3 className="font-bold text-lg mb-3">Your Cart</h3>
                                    {cartItems.length === 0 ? (
                                    <p className="text-gray-500 text-sm">Your cart is empty.</p>
                                    ) : (
                                    <>
                                        <ul className="space-y-3 max-h-64 overflow-y-auto">
                                            {cartItems.map((item) => (
                                                <li key={item.id} className="flex md:justify-between justify-center items-center border-b pb-2">
                                                    <div>
                                                        <p className="font-medium text-sm">{item.name}</p>
                                                        <p className="text-xs text-gray-500">{item.price} BDT × {item.qty}</p>
                                                    </div>
                                                    <img src={item.image} className="w-10 h-10 object-cover rounded"/>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-3 font-bold md:text-right text-left">
                                            Total: {cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)} BDT
                                        </p>
                                    </>
                                    )}
                            </div>
                        )}

                    </div>
                </div>
                <div>
                    <div className="relative">
                        <div onClick={() => setWishOpen(!wishOpen)} className="relative md:border md:bg-white md:rounded-full lg:p-4 md:p-2 sm:p-0 cursor-pointer">
                            <p>♥️</p>
                            {wishCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[11px] font-bold min-w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-purple-700 px-1">
                                    {wishCount}
                                </span>
                            )}
                        </div>

                        {wishOpen && (
                            <div className="absolute right-0 mt-2 md:w-72 w-50 bg-white text-black rounded-xl shadow-xl z-50 p-4">
                                <h3 className="font-bold text-lg mb-3">Wishlist</h3>
                                {wishlistItems.length === 0 ? (
                                     <p className="text-gray-500 text-sm">Your wishlist is empty.</p>
                                ) : (
                                    <ul className="space-y-3 max-h-64 overflow-y-auto">
                                        {wishlistItems.map((item) => (
                                            <li key={item.id} className="flex md:justify-between justify-center items-center border-b pb-2">
                                               <div>
                                                  <p className="font-medium text-sm">{item.name}</p>
                                                  <p className="text-xs text-gray-500">{item.price} BDT</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <img src={item.image} className="w-10 h-10 object-cover rounded"/>
                                                    <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    className="text-red-400 text-xs hover:underline"
                                                    >
                                                      Remove
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                {!user ? (
                    <Link href="/login">
                        <button className="md:block hidden bg-yellow-600 hover:bg-yellow-800 text-white text-md font-medium md:p-4 p-1 md:rounded-xl rounded transition">
                            Login
                        </button>
                    </Link>
                ):(
                    <button onClick={() => {
                        localStorage.removeItem("currentUser")
                        setUser(null)
                        window.location.reload()
                    }}
                        className="md:block hidden bg-red-500 hover:bg-red-700 text-white text-md font-medium md:p-4 p-1 md:rounded-xl rounded transition">
                            Logout
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};