import React, {useState, useEffect, useContext} from 'react'
import {CartContainer, CartBox, CartList, CartItem } from "./style"
import { CartContext } from "../../../contexts/CartContext";
import { FaShoppingCart } from 'react-icons/fa';

export default function Index() {

    const [isCartOpen, setIsCartOpen] = useState(false)


     const {cart, AddCart, RemoveItemCart} = useContext(CartContext)   

    const [CartItens, setCartItens] = useState([])

    const toogleCart = () =>{
        setIsCartOpen((open) => !open)
    }

    useEffect(()=> {
        setCartItens(cart)

        if(cart.length >=1) {
            setIsCartOpen(true)
        }

    }, [cart])

    return(
                <CartContainer>
                    <button>
                        <FaShoppingCart onClick={toogleCart}/>
                    </button>
                    <CartBox className={isCartOpen ? 'active' : null}>
                        {CartItens.length >= 1 ? (
                            <CartList>

                                <button className='close' onClick={toogleCart}>X</button>

                                {CartItens.map((item, index) => (
                                    <CartItem key={index}>
                                        <img src={item.image} alt={item.title}/>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.ingredientes ? item.ingredientes : ''}</p>
                                            <p>R${item.price}</p>
                                            <p>
                                                <button onClick={() => AddCart(item)}>+</button>
                                                <span> {item.quantity} </span>
                                                <button>-</button>
                                            </p>
                                            <button onClick={() => RemoveItemCart(item.id)} className='remove'>Remove</button>
                                        </div>
                                    </CartItem>
                                ))}

                                <button onClick={null} className='checkout'>Finalizar Compra</button>

                            </CartList>
                    ) : (
                        <div className='empty-cart'>
                            <button className='close' onClick={toogleCart}>X</button>
                            <p>Não há itens no carrinho.</p>
                        </div>
                    )}
                </CartBox> 
                </CartContainer>
                
    )
}