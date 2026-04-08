import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Banner from '../image/Banner.png'
import SamsungS24Ultra from '../image/SamsungS24Ultra.jpg'

export const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className="relative flex flex-col rounded-b-xl bg-purple-700 text-yellow-100 pb-30">
        <div className="flex flex-col md:items-center items-start md:pt-0 pt-10 md:p-0 p-4">
          <h1 className="font-bold md:text-center md:text-6xl text-5xl p-2">
            Upgrade Your Tech Accessorize with BuyBuy
          </h1>
          <p className="md:text-center p-2">
            Explore the latest gadgets that will take your experience to the next level.<br></br>From smart devices to the coolest accessories, we have it all!
          </p>
          <div className="flex items-center md:p-5 p-3">
            <button className="bg-white text-black font-semibold md:text-2xl text-xl p-3 rounded-xl hover:bg-purple-200">Buy Now!</button>
          </div>
        </div>

        <div className="absolute md:-bottom-70 -bottom-20 left-1/2 -translate-x-1/2 border p-2 rounded-xl bg-white/50">
          <Image width={800} height={300} className="border rounded-xl w-fit h-fit bg-purple-900 object-contain" src={Banner} alt="Banner"/>
        </div>
      </div>
      <div className="md:mt-80 mt-30 flex flex-col items-center">
        <h1 className="font-bold md:text-3xl text-xl p-10">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          <div className="flex flex-col items-center border rounded-xl p-2">
            <div>
              <Image width={300} height={300} className="w-full h-auto" src={SamsungS24Ultra} alt="Samsung Galaxy S24 Ultra"/>
            </div>
            <div className="flex flex-col">
              <h3>Samsung Galaxy S24 Ultra</h3>
              <p>Price: $1199</p>
              <div className="flex items-center gap-5">
                <button className="border-purple-200 rounded-full p-2 bg-purple-200 font-semibold">View Details</button>
                <button className="border-purple-200 rounded-full p-2 bg-purple-700 font-semibold text-white">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border rounded-xl p-2">
            <div>
              <Image width={300} height={300} className="w-full h-auto" src={SamsungS24Ultra} alt="Samsung Galaxy S24 Ultra"/>
            </div>
            <div className="flex flex-col">
              <h3>Samsung Galaxy S24 Ultra</h3>
              <p>Price: $1199</p>
              <div className="flex items-center gap-5">
                <button className="border-purple-200 rounded-full p-2 bg-purple-200 font-semibold">View Details</button>
                <button className="border-purple-200 rounded-full p-2 bg-purple-700 font-semibold text-white">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border rounded-xl p-2">
            <div>
              <Image width={300} height={300} className="w-full h-auto" src={SamsungS24Ultra} alt="Samsung Galaxy S24 Ultra"/>
            </div>
            <div className="flex flex-col">
              <h3>Samsung Galaxy S24 Ultra</h3>
              <p>Price: $1199</p>
              <div className="flex items-center gap-5">
                <button className="border-purple-200 rounded-full p-2 bg-purple-200 font-semibold">View Details</button>
                <button className="border-purple-200 rounded-full p-2 bg-purple-700 font-semibold text-white">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border rounded-xl p-2">
            <div>
              <Image width={300} height={300} className="w-full h-auto" src={SamsungS24Ultra} alt="Samsung Galaxy S24 Ultra"/>
            </div>
            <div className="flex flex-col">
              <h3>Samsung Galaxy S24 Ultra</h3>
              <p>Price: $1199</p>
              <div className="flex items-center gap-5">
                <button className="border-purple-200 rounded-full p-2 bg-purple-200 font-semibold">View Details</button>
                <button className="border-purple-200 rounded-full p-2 bg-purple-700 font-semibold text-white">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border rounded-xl p-2">
            <div>
              <Image width={300} height={300} className="w-full h-auto" src={SamsungS24Ultra} alt="Samsung Galaxy S24 Ultra"/>
            </div>
            <div className="flex flex-col">
              <h3>Samsung Galaxy S24 Ultra</h3>
              <p>Price: $1199</p>
              <div className="flex items-center gap-5">
                <button className="border-purple-200 rounded-full p-2 bg-purple-200 font-semibold">View Details</button>
                <button className="border-purple-200 rounded-full p-2 bg-purple-700 font-semibold text-white">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border rounded-xl p-2">
            <div>
              <Image width={300} height={300} className="w-full h-auto" src={SamsungS24Ultra} alt="Samsung Galaxy S24 Ultra"/>
            </div>
            <div className="flex flex-col">
              <h3>Samsung Galaxy S24 Ultra</h3>
              <p>Price: $1199</p>
              <div className="flex items-center gap-5">
                <button className="border-purple-200 rounded-full p-2 bg-purple-200 font-semibold">View Details</button>
                <button className="border-purple-200 rounded-full p-2 bg-purple-700 font-semibold text-white">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}