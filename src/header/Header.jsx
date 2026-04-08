"use client"
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
    const[menuOpen, setMenuOpen]= useState(false);
  return (
    <div className="relative flex flex-col rounded-t-xl bg-purple-700 text-yellow-100 pb-20">
        <div className="flex items-center justify-between md:p-10 p-5">
            <div className="font-bold md:text-3xl text-2xl">
                <h1>BuyBuy</h1>
            </div>
            <div className="hidden md:flex items-center lg:gap-10 gap-1">
                <div className="font-semibold hover:bg-gray-300 p-2 hover:text-black">
                    <Link href="/home">Home</Link>
                </div>
                <div className="font-semibold hover:bg-gray-300 p-2 hover:text-black">
                    <Link href="/statistics">Statistics</Link>
                </div>
                <div className="font-semibold hover:bg-gray-300 p-2 hover:text-black">
                    <Link href="/dashboard">Dashboard</Link>
                </div>
                <div className="font-semibold hover:bg-gray-300 p-2 hover:text-black">
                    <Link href="/faq">FAQ</Link>
                </div>
            </div>

            <div className="md:hidden absolute left-6 top-20 flex items-center justify-center border rounded bg-white/80">
                <button onClick={()=> setMenuOpen(!menuOpen)} className="font-semibold relative px-2">☰</button>
                <div className={`absolute flex flex-col bg-white/80 p-2 rounded text-black font-semibold -bottom-21 left-10 ${menuOpen? "opacity:100 scale:100" : "opacity-0 scale-0"} transition duration-500 ease-in-out`}>
                    <a href="home">Home</a>
                    <a href="#">Statistics</a>
                    <a href="#">Dashboard</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
            <div className="flex md:gap-10 gap-2">
                <div>
                    <div className="relative border bg-white rounded-full p-4">
                        <p>🛍️</p>
                    </div>
                </div>
                <div>
                    <div className="relative border bg-white rounded-full p-4">
                        <p>♥️</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};