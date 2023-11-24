import {CheckoutContainer, CheckoutFormContainer, CheckoutCartContainer, CartList, CartItem } from './style'

import React, {useState, useEffect, useContext} from 'react'
import { CartContext } from "../../../contexts/CartContext";

export default function Index() {

    const {cart, AddCart, RemoveItemCart} = useContext(CartContext)   

   const [CartItens, setCartItens] = useState([])

   useEffect(()=> {
       setCartItens(cart)
   }, [cart])

    return(
        <CheckoutContainer>
            <CheckoutFormContainer>
                teste1
            </CheckoutFormContainer>

            <CheckoutCartContainer>
                <CartList>

                {CartItens.map((item, index) => (
                    <CartItem key={index}>
                        <img src={item.image} alt={item.title}/>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.ingredientes ? item.ingredientes : ''}</p>
                            <p>R${item.price}</p>
                            <p>
                                <button onClick={AddCart(item)}>+</button>
                                <span> {item.quantity} </span>
                                <button>-</button>
                            </p>
                            <button onClick={() => RemoveItemCart(item.id)} className='remove'>Remove</button>
                        </div>
                    </CartItem>
                ))}


            </CartList>
            </CheckoutCartContainer>
        </CheckoutContainer>
    )
}