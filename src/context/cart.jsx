// context is used to share data between components without having to pass props down manually at every level.

import {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

// CartProvider is a component that will wrap our application and give access to the cart state and the functions to update it.
export const CartProvider = ({children}) => {

// intial the state of the cart
    const [cartItems, setCartItems] = useState([]);


    const addToCart = (item) => {

        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);


        if (isItemInCart) { 
            setCartItems(
                cartItems.map((cartItem) => // 
  
                cartItem.id === item.id
                ? {...cartItem, quantity: cartItem.quantity + 1} // if item is already in cart, increase the quantity
                : cartItem // otherwise return the item as is
                )
            );
            } else {
                setCartItems([...cartItems, {...item, quantity: 1}]); // if item is not in cart, add it to cart
                        }       
                         };

// remove item from cart

const removeFromCart = (itemToRemove) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);
}
