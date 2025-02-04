import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()


    export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([])
    const [cartValue, setCartValue] = useState(0)


    useEffect(() => {

        const cartPersistence = localStorage.getItem('cart')

        if(cartPersistence){
            setCart(JSON.parse(cartPersistence))
        }
    }, [])

    useEffect(() => {
        var value = 0
        cart.forEach((item) => {
            value = value + (item.price * item.quantity)
           })
           setCartValue(value)
    }, [cart])

    const CheckCartItems = (id, cart) => {
        let indexCart = null
        cart.forEach((itemCart, index) => {
            if(itemCart.id === id){
                indexCart = index
            }
            return null
        })
        return indexCart

    }

    const AddCart = (item) => {
        if (item) {   
            const index = CheckCartItems(item.id, cart)
            if(cart.length === 0){
                item.quantity = 1
                const newCart = [item]
                setCart(newCart)
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
            else if(index != null){
                cart[index].quantity = cart[index].quantity + 1
                const newCart = [...cart]
                setCart(newCart)
                localStorage.setItem('cart', JSON.stringify(newCart))
            }else{
                item.quantity = 1
                const newCart = [item, ...cart]
                setCart(newCart)
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
         

        }

    }

    const RemoveItemCart = (itemId) => {
        if (itemId) {
            const index = CheckCartItems(itemId, [...cart])  
            if(cart[index].quantity >= 2){
                cart[index].quantity = cart[index].quantity - 1
                const newCart = [...cart]
                setCart(newCart)
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
            else{
                const newCart = [...cart]
                newCart.splice(index, 1)
                setCart(newCart)
                localStorage.setItem('cart', JSON.stringify(newCart))
            }
        }

    }

    const ClearCart = () => {
            setCart([])
    }

        return(
            <CartContext.Provider value={{cart, AddCart, RemoveItemCart, ClearCart, cartValue}}>
                {children}
            </CartContext.Provider>
        )
}