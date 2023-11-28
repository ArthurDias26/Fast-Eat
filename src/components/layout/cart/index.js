import React, {useState, useEffect, useContext} from 'react'
import {CartContainer, CartBox, CartList, CartItem } from "./style"
import { CartContext } from "../../../contexts/CartContext";
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Index() {

    const [isCartOpen, setIsCartOpen] = useState(false)
     const {cart, AddCart, RemoveItemCart, cartValue} = useContext(CartContext)   
    const [CartItens, setCartItens] = useState([])

    const navigate = useNavigate()

    const toogleCart = () =>{
        setIsCartOpen((open) => !open)
    }

    const CheckNavigate = () => {
        const date = new Date()
        const horas = date.getHours()

        if(horas > 14 && horas < 24 && cart.length >=1){
            navigate("/checkout")
            setIsCartOpen(false)
        }
        else{
            window.alert('agreadecemos a sua vista, porem estamos fechados no momento!')
        }
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
                                                <button onClick={() => RemoveItemCart(item.id)}>-</button>
                                            </p>
                                        </div>
                                    </CartItem>
                                ))}

                                <p>Valor total: R${cartValue.toFixed(2).toString().replace(".", ",")}</p>
                                <button onClick={CheckNavigate} className='checkout'>Finalizar Compra</button>

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