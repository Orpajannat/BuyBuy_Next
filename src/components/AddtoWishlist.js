"use client"

import React from 'react'
import { useCart } from '@/context/CartContext'

export default function AddtoWishlist({product}) {
  const {  addtoWishlist, removeFromWishlist, isInWishlist } = useCart();

  const inWishlist = isInWishlist(product.id);

  return (
    <div
      onClick={() => inWishlist ? removeFromWishlist(product.id) : addtoWishlist(product)}
      className="mt-4 flex items-center justify-center w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 cursor-pointer"
    >
      {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}  {/* ✅ */}
    </div>
  )
}