import products from '@/data/products.json'
import { Heart } from 'lucide-react'
import BuyNow from '../BuyNow'
import Example from '../combobox-standard-7'
import accessories from '@/data/accessories.json'

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
        * { font-family: "Geist", sans-serif; }
        @keyframes rotate { 100% { transform: rotate(1turn); } }
        .rainbow::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(#FFF);
          filter: blur(6px);
          animation: rotate 4s linear infinite;
        }
      `}</style>

      <div className="flex items-center justify-center bg-purple-700 w-full">
        <Example />
      </div>

      {/* ✅ Hero Section */}
      <section className="bg-purple-700 text-white flex flex-col items-center py-20 px-4 rounded-b-xl">

        
        <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-px flex items-center justify-center rounded-full mb-8">
          <button className="flex items-center justify-center gap-3 pl-4 pr-6 py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex size-2 rounded-full bg-yellow-400"></span>
            </div>
            <span className="text-xs">Bangladesh's #1 Tech Store</span>
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-center max-w-3xl leading-tight">
          Upgrade Your Tech with <span className="text-yellow-400">BuyBuy</span>
        </h1>
        <p className="text-gray-300 text-center max-w-lg mt-4 text-sm md:text-base">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </section>

      {/* ✅ Products Grid */}
      <section className="bg-white flex items-center justify-center px-4 py-16">
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {products.map((item) => (
            <div key={item.id} className="border border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-2 flex flex-col w-46">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-lime-300 text-neutral-800 text-xs px-2 py-0.5 rounded-full"><span className="font-bold">20%</span> off</span>
                <div className="size-7 rounded-full border border-zinc-300 flex items-center justify-center cursor-pointer">
                  <Heart size={15} />
                </div>
              </div>
              <div className="flex items-center justify-center h-30 mb-2">
                <img src={item.image} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-sm text-neutral-500 mb-2 px-2">{item.name}</p>
              <div className="flex items-center gap-2 px-2">
                <span className="text-sm font-semibold text-neutral-800">{item.price} BDT</span>
                <span className="text-xs text-neutral-500 line-through">{item.oldprice} BDT</span>
              </div>
              <BuyNow id={item.id} type="products"/>
            </div>
          ))}
        </div>
      </section>
      <h1 className="bg-purple-600 text-center p-2 text-yellow-200 font-bold rounded">Phone Accessories</h1>
      <section className="bg-white flex items-center justify-center px-4 py-16">
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {accessories.map((item) => (
            <div key={item.id} className="border border-zinc-200 hover:border-zinc-300 transition-colors rounded-xl p-2 flex flex-col w-46">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-lime-300 text-neutral-800 text-xs px-2 py-0.5 rounded-full"><span className="font-bold">10%</span> off</span>
                <div className="size-7 rounded-full border border-zinc-300 flex items-center justify-center cursor-pointer">
                  <Heart size={15} />
                </div>
              </div>
              <div className="flex items-center justify-center h-30 mb-2">
                <img src={item.image} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-sm text-neutral-500 mb-2 px-2">{item.name}</p>
              <div className="flex items-center gap-2 px-2">
                <span className="text-sm font-semibold text-neutral-800">{item.price} BDT</span>
                <span className="text-xs text-neutral-500 line-through">{item.oldprice} BDT</span>
              </div>
              <BuyNow id={item.id} type="accessories"/>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}