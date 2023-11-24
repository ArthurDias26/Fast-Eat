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

    const AddItem = (item, cart) => {

        const newCart = cart.filter((itemCart, index) => {
            if (cart.length < 1){
                return item
            }

            if(itemCart.id === item.id){
                return cart
            }

            return []
        })

        return [...newCart].length >= 1 ? newCart : [item, ...cart]

    }

    const AddCart = (item) => {
        if (item) {   
            item.quantity++
            const newCart = AddItem(item, cart)
            setCart(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart))

        }

    }

    const RemoveItemCart = (itemId) => {
        if (itemId) {
            const newCart = CheckCartItems(itemId, [...cart])     
            localStorage.setItem('cart', JSON.stringify(newCart))
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