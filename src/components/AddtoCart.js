"use client"
import React from 'react'
import { useCart } from '@/context/CartContext'

export default function AddtoCart ({ product }) {
    const { addToCart, removeFromCart, cartItems, setCartItems, getCartState, setCartState } = useCart();

    const { inCart, qty } = getCartState(product.id);

    const handleAddToCart = () => {
        const user = JSON.parse(localStorage.getItem("currentUser") || "null")

        if(!user) {
          alert("Log in first!")
          return
        }

        setCartState(product.id, { inCart: true, qty: 1 });
        addToCart(1);
        setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
    };

    const handleIncrease =  () => {
        setCartState(product.id, { qty: qty + 1 }); 
        addToCart(1);
        setCartItems((prev) =>
          prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        );
    };

    const handleDecrease = () => {
      if (qty - 1 <= 0) {
            removeFromCart(qty);
            setCartState(product.id, { inCart: false, qty: 1 });  // ✅
            setCartItems((prev) => prev.filter((item) => item.id !== product.id));
        } else {
            setCartState(product.id, { qty: qty - 1 });  // ✅
            removeFromCart(1);
            setCartItems((prev) =>
              prev.map((item) => item.id === product.id ? { ...item, qty: item.qty - 1 } : item)
            );
        }
  };

  return (
    <div className="mt-4 flex items-center justify-center w-full rounded-sm bg-yellow-400 text-sm font-medium transition hover:scale-105">
      {!inCart ? (
        // "Add to Cart" button
        <button
          onClick={handleAddToCart}
          className="w-full p-4"
        >
          Add to Cart
        </button>
      ) : (
        // − qty + counter
        <div className="flex items-stretch w-full">
          <button
            onClick={handleDecrease}
            className="px-5 py-4 text-xl font-bold hover:bg-black/10 transition-colors"
          >
            −
          </button>
          <span className="flex-1 flex items-center justify-center font-bold border-x border-black/10">
            {qty}
          </span>
          <button
            onClick={handleIncrease}
            className="px-5 py-4 text-xl font-bold hover:bg-black/10 transition-colors"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

