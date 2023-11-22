import { useState, createContext } from "react";

export const CartContext = createContext()


    export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([])

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
            console.log(item, newCart, cart)

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