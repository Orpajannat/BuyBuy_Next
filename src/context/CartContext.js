"use client"

import React from 'react'
import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast'; 

const CartContext = createContext(null);

export default function CartProvider ({children}) {
    const[cartCount, setCartCount] =  useState(0);
    const [wishCount, setWishCount]= useState(0);
    const [cartStates, setCartStates] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToCart = (qty=1) => {setCartCount((prev)=> prev + qty); toast.success("Added to Cart!");};

    const removeFromCart =(qty=1) => {setCartCount((prev)=> Math.max(0, prev-qty));};

    const isInWishlist = (productId) => wishlistItems.some((item) => item.id === productId);

    const addtoWishlist = (product) => {
      if (!isInWishlist(product.id)) {
        setWishlistItems((prev) => [...prev, product]);
        setWishCount((prev) => prev + 1);
        toast.success("Added to Wishlist!"); 
      }
    };

    const removeFromWishlist = (productId) => {
      setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
      setWishCount((prev) => prev - 1);
    };
    
    const getCartState = (productId) => {
        return cartStates[productId] || { inCart: false, qty: 1 };
    };

   
    const setCartState = (productId, newState) => {
        setCartStates((prev) => ({
            ...prev,
            [productId]: { ...prev[productId], ...newState }
        }));
    };
    
  return (
    <CartContext.Provider
    value={{cartCount, wishCount, addToCart, removeFromCart,
           addtoWishlist, removeFromWishlist, isInWishlist,  // ✅ must be here
            cartItems, setCartItems, getCartState, setCartState,
            wishlistItems}}>
        {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
}
