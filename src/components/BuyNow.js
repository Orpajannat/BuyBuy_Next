"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import products from '@/data/products.json'


export default function BuyNow ({id}) {
    const router = useRouter()

  return (
    <div className="flex flex-wrap justify-start gap-5 md:gap-12">
       <button onClick={() => router.push(`/products/${id}`)} type="button" className="px-2 py-2 active:scale-95 transition bg-purple-500 rounded text-white shadow-lg shadow-purple-500/30 text-sm font-medium cursor-pointer">Buy Now</button>
    </div>
  )
}
