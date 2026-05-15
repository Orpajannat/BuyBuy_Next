"use client"
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const getCurrentUser = () => {
    if (typeof window === "undefined") return null
    return JSON.parse(localStorage.getItem("currentUser") || "null")
}

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [wishOpen, setWishOpen] = useState(false);
    const { cartCount, wishCount, cartItems, wishlistItems, removeFromWishlist } = useCart();
    const [user, setUser] = useState(getCurrentUser())

    return (
        <div className="flex flex-col xl:rounded-t-xl bg-purple-700 text-yellow-100 pb-20">

            {/* Top bar */}
            <div className="flex items-center justify-between md:p-10 p-5">

                {/* Left side — hamburger + logo */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-purple-600 transition text-xl">
                        ☰
                    </button>
                    <div className="font-bold md:text-3xl text-2xl">
                        <Link href="/"><h1>BuyBuy</h1></Link>
                    </div>
                </div>

                {/* Desktop Nav */}
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

                {/* Right side — cart, wishlist, login */}
                <div className="flex lg:gap-10 md:gap-2 gap-3 items-center">

                    {/* Cart */}
                    <div className="relative">
                        <div onClick={() => setCartOpen(!cartOpen)} className="relative md:border md:bg-white md:rounded-full lg:p-4 md:p-2 cursor-pointer">
                            <p>🛍️</p>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[11px] font-bold min-w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-purple-700 px-1">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        {cartOpen && (
                            <div className="absolute md:right-0 right-0 mt-2 md:w-72 w-40 bg-white text-black rounded-xl shadow-xl z-50 p-4">
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
                                                    <img src={item.image} className="w-10 h-10 object-cover rounded" />
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

                    {/* Wishlist */}
                    <div className="relative">
                        <div onClick={() => setWishOpen(!wishOpen)} className="relative md:border md:bg-white md:rounded-full lg:p-4 md:p-2 cursor-pointer">
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
                                                    <img src={item.image} className="w-10 h-10 object-cover rounded" />
                                                    <button onClick={() => removeFromWishlist(item.id)} className="text-red-400 text-xs hover:underline">
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

                    {/* Desktop Login/Logout */}
                    {!user ? (
                        <Link href="/login">
                            <button className="md:block hidden bg-yellow-600 hover:bg-yellow-800 text-white font-medium md:p-4 p-1 md:rounded-xl rounded transition">
                                Login
                            </button>
                        </Link>
                    ) : (
                        <button
                            onClick={() => {
                                localStorage.removeItem("currentUser")
                                setUser(null)
                                window.location.reload()
                            }}
                            className="md:block hidden bg-red-500 hover:bg-red-700 text-white font-medium md:p-4 p-1 md:rounded-xl rounded transition">
                            Logout
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile sliding menu — outside top bar so it slides below */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col bg-purple-800 px-6 py-4 gap-1">
                    <Link href="/home" onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-purple-600 font-semibold transition">Home</Link>
                    <Link href="/statistics" onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-purple-600 font-semibold transition">Statistics</Link>
                    <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-purple-600 font-semibold transition">Dashboard</Link>
                    <Link href="/faq" onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-purple-600 font-semibold transition">FAQ</Link>
                    <Link href="/tips" onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-purple-600 font-semibold transition">Tips</Link>
                    <div className="mt-3 border-t border-purple-600 pt-3">
                        {!user ? (
                            <Link href="/login" onClick={() => setMenuOpen(false)}>
                                <button className="w-full bg-yellow-600 hover:bg-yellow-800 text-white font-medium py-2 rounded-lg transition">Login</button>
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    localStorage.removeItem("currentUser")
                                    setUser(null)
                                    window.location.reload()
                                }}
                                className="w-full bg-red-500 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition">
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};