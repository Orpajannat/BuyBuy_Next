import { Heart } from 'lucide-react'
import accessories from '@/data/accessories.json'
import AddtoCart from '@/components/AddtoCart'
import AddtoWishlist from '@/components/AddtoWishlist'
import {Circle} from 'lucide-react'

export default async function ProductPage ({params}) {
    const { id } = await params

    const product= accessories.find((item)=>item.id==id)
  return (
    <div className="group relative flex md:flex-row flex-col md:items-start items-center overflow-hidden rounded-lg cursor-pointer m-10">
      

      {/* Product Image */}
      <img
        src={product.image}
        className="h-fit w-fit object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      {/* Product Info */}
      <div className="relative border border-gray-100 bg-white p-6">
        <span className="bg-purple-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap rounded">
          Exclusive Collection
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900 font-semibold">{product.name}</h3>
        <h3 className="text-xl">{product.description1}</h3>
        <p>{product.description2}</p>
        <p>{product.description3}</p>
        <div className="flex flex-col">
            <p className="font-semibold bg-gray-100">Product details:</p>
            <p className="flex items-center gap-2"><Circle size="10"/> {product.d1}</p>
            <p className="flex items-center gap-2"><Circle size="10"/>{product.d2}</p>
            <p className="flex items-center gap-2"><Circle size="10"/>{product.d3}</p>
            <p className="flex items-center gap-2"><Circle size="10"/>{product.d4}</p>
            <p className="flex items-center gap-2"><Circle size="10"/>{product.d5}</p>
        </div>
        <p className="mt-1.5 text-sm text-gray-700 font-semibold">{product.price} BDT</p>

        {/* Add to Cart Button */}
        <div className="flex md:flex-row flex-col md:gap-10 gap-2">
          <AddtoCart product={product}/>
          <AddtoWishlist product={product}/>
        </div>
      </div>

    </div>
  )
}