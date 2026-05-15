"use client"
import React, { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("cart");
  const { cartItems, wishlistItems, removeFromWishlist } = useCart();

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center gap-10 bg-purple-700 rounded-b-xl pb-10 text-white">
        <h1 className="font-bold md:text-4xl text-3xl">Dashboard</h1>
        <p className="text-center px-4">Explore the latest gadgets that will take your experience to the next level.</p>
        <div className="flex gap-10">
          <button onClick={() => setActiveTab("cart")} className="bg-green-500/80 rounded-4xl p-2 px-4 font-semibold">Cart</button>
          <button onClick={() => setActiveTab("wishlist")} className="bg-green-500/80 rounded-4xl p-2 px-4 font-semibold">Wishlist</button>
        </div>
      </div>

      {/* Items */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {activeTab === "cart" && cartItems.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 flex gap-4 shadow">
            <img src={item.image} className="w-16 h-16 object-cover rounded"/>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.price} BDT × {item.qty}</p>
            </div>
          </div>
        ))}

        {activeTab === "wishlist" && wishlistItems.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 flex gap-4 shadow">
            <img src={item.image} className="w-16 h-16 object-cover rounded"/>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.price} BDT</p>
            </div>
            <button onClick={() => removeFromWishlist(item.id)} className="text-red-400 text-xs">Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}