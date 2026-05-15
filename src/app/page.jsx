"use client"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import products from '@/data/products.json'

export default function LandingPage() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % products.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + products.length) % products.length)

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextSlide, 3000)
  }

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className="flex flex-col items-center px-4 pb-20 bg-purple-700 min-h-screen">

      {/* Badge */}
      <div className="flex items-center gap-3 pl-4 pr-6 py-3 text-white rounded-full font-medium bg-purple-900/80 border border-white/20 mt-16 mb-8">
        <div className="relative flex size-3.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex size-2 rounded-full bg-yellow-400"></span>
        </div>
        <span className="text-xs text-white">Bangladesh's #1 Tech Store</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight text-white">
        Upgrade Your Tech with <span className="text-yellow-400">BuyBuy</span>
      </h1>

      {/* Subtext */}
      <p className="text-sm md:text-base text-white/70 text-center max-w-lg mt-5">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-8">
        <Link href="/home">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full text-sm transition">
            Shop Now
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-full text-sm transition border border-white/20">
            Dashboard
          </button>
        </Link>
      </div>

      {/* ✅ Slider */}
      <div className="flex items-center mt-16 w-full max-w-3xl">
        <button onClick={() => { prevSlide(); resetAutoSlide(); }} className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0 flex flex-col items-center bg-white/10 rounded-xl p-6">
                <img src={product.image} alt={product.name} className="h-48 object-contain rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => { nextSlide(); resetAutoSlide(); }} className="p-1 md:p-2 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  )
}