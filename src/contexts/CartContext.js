import { json } from "react-router-dom";
import usePersistenceState from "../utilities/usePersistenceState";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()


    export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([])

    useEffect(() => {

        const cartPersistence = localStorage.getItem('cart')

        if(cartPersistence){
            setCart(JSON.parse(cartPersistence))
        }

    }, [])

    const CheckCartItems = (id, cart) => {
        const checkedCart = cart.filter((itemCart) => {
            if(itemCart.id === id){
                return null
            }
            return itemCart
        })

        return checkedCart

    }

    const AddCart = (item) => {
        if (item) {   
            const newCart = [item, ...cart]
            setCart(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart))

        }

    }

    const RemoveItemCart = (itemId) => {
        if (itemId) {
            const newCart = CheckCartItems(itemId, [...cart])     
            setCart(newCart)
        }

    }

    const ClearCart = () => {
            setCart([])
    }

        return(
            <CartContext.Provider value={{cart, AddCart, RemoveItemCart, ClearCart}}>
                {children}
            </CartContext.Provider>
        )
}