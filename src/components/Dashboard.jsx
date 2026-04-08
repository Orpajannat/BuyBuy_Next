import React from 'react'
import Link from 'next/link'

export const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-20 bg-purple-700 rounded-b-xl">
        <div className="flex flex-col items-center gap-10 text-white">
          <h1 className="font-bold md:text-4xl text-3xl">Dashboard</h1>
          <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
        <div className="flex gap-10 pb-10">
          <div>
            <Link href="/cart"><button className="bg-green-500/80 rounded-4xl p-2 px-4 hover:bg-green-900 hover:text-white font-semibold">Cart</button></Link>
          </div>
          <div>
            <button className="bg-green-500/80 rounded-4xl p-2 px-4 hover:bg-green-900 hover:text-white font-semibold">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}