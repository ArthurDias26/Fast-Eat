import {CheckoutContainer, CheckoutFormContainer, CheckoutCartContainer, CartList, CartItem, DeliveyForm, ContactForm, PayForm, ReviewForm } from './style'

import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default function Index() {

    const [step, setStep] = useState(1)
    const [deliveryType, setDeliveryType] = useState('Retirada no local')
    const [payForm, setPayForm] = useState('Dinheiro')

    const {cart, AddCart, RemoveItemCart, cartValue} = useContext(CartContext)   

   const [CartItens, setCartItens] = useState([])

   const navigate = useNavigate()

   useEffect(()=> {
       setCartItens(cart)
   }, [cart])

   useEffect(()=> {
    const date = new Date()
        const horas = date.getHours()

        if(horas < 0 || cart.length === 0){
            window.alert('agreadecemos a sua vista, porem estamos fechados no momento!')
            navigate("/")
        }

        window.scrollTo(0, 0);
})

   const deliverySchema = yup.object().shape({
    cidade: yup.string()
    .required('A cidade é obrigatório'),

    bairro: yup.string()
    .required('Você deve inserir o bairro para a entrega')
    .min(5, 'insira um endereço com no minimo 5 caracteres'),

    rua: yup.string()
    .required('Você deve inserir a rua para a entrega')
    .min(5, 'insira um endereço com no minimo 5 caracteres'),

    numero: yup.number()
    .required('Você deve inserir o número da casa para a entrega')
    
})

const contactSchema = yup.object().shape({
    nome: yup.string()
    .required('Você deve inserir o seu nome'),

    telefone: yup.number()
    .required('Você deve inserir o número de telefone')
    .min(cartValue, 'insira um número de telefone valido')
})

const paySchema = yup.object().shape({
    valor: yup.number()
    .required('insira o valor para o troco')
    .min(cartValue, 'insira um valor maior que o do pedido')

})

    return(
        <CheckoutContainer>
            <CheckoutFormContainer>
                        <DeliveyForm className={step === 1 ? 'current' : step > 1 ? 'past' : ''}>
                            <Formik
                            initialValues={{
                                cidade: 'Valentim-Gentil',
                                bairro: '',
                                rua: '',
                                numero: ''
                            }}

                            validationSchema={deliverySchema}
                        >
                            {({isValid}) => (

                            <Form>
                                <h2>1. Método de entrega</h2>

                                <label onClick={() => setDeliveryType('Retirada no local')}>
                                    <Field type="radio" name="picked" value="One" checked/>
                                    Retirar na loja 
                                </label>

                                <label onClick={() => setDeliveryType('Entrega')}>
                                    <Field type="radio" name="picked" value="two" />
                                    Entrega
                                </label>

                                <div className={`delivery-info ${deliveryType === 'Retirada no local' ? 'active' : ''}`}>
                                    <p>
                                        Local de retirada:
                                        <br/>Rua Figuerira, Nº333 Valentim Gentil/SP
                                    </p>
                                    <p>
                                        Horário de retirada:
                                        <br/>Após 15 minutos do envio da pedido
                                    </p>
                                </div>
            

                                <div className={`delivery-info ${deliveryType === 'Entrega' ? 'active' : ''}`}>
                                    <span htmlFor='cidade'>Cidade:</span>
                                    <Field as="select" name="cidade">
                                        <option value="Valentim-Gentil">Valentim Gentil</option>
                                        <option value="otuporanga">Votuporanga</option>
                                        <option value="Meridiano">Meridiano</option>
                                    </Field>

                                    <span htmlFor='bairro'>Bairro:</span>
                                    <Field type='text' id='bairro' name='bairro' autocomplete='off'/>
                                    <div className='error_message'><ErrorMessage name='bairro'/></div>

                                    <span htmlFor='rua'>Rua:</span>
                                    <Field type='text' id='rua' name='rua' autocomplete='off'/>
                                    <div className='error_message'><ErrorMessage name='rua'/></div>

                                    <span htmlFor='numero'>Número da casa:</span>
                                    <Field type='number' id='numero' name='numero' autocomplete='off'/>
                                    <div className='error_message'><ErrorMessage name='numero'/></div>
                                </div>

                                <button onClick={()=> setStep(2)} disabled={!isValid && deliveryType === "Entrega"} className={isValid ? 'valid' : ''}>Continuar {'>'}</button>
                            </Form>

                            )}
                            </Formik>
                        
                        </DeliveyForm>

                        <ContactForm className={step === 2 ? 'current' : step > 2 ? 'past' : ''}>

                            <Formik
                            initialValues={{
                                nome: '',
                                telefone: '',
                            }}

                            onSubmit={() => {
                                setStep(3)
                            }}
                            validationSchema={contactSchema}>
                            {({isValid}) => (

                            <Form>
                                <h2>2. Informações de contato</h2>

                                <span htmlFor='nome'>Nome:</span>
                                <Field type='text' id='nome' name='nome' autocomplete="off"/>
                                <div className='error_message'><ErrorMessage name='nome'/></div>

                                <span htmlFor='telefone'>Telefone de conatato:</span>
                                <Field type='number' id='telefone' name='telefone'/>
                                <div className='error_message'><ErrorMessage name='telefone'/></div>

                                <button onClick={()=> setStep(1)} type='button'>{'<'} Voltar</button>
                                <button type='submit' disabled={!isValid} className={isValid ? 'valid' : ''}>Continuar {'>'}</button>

                            </Form>

                            )}
                            </Formik>
                            

                        </ContactForm>

                        <PayForm className={step === 3 ? 'current' : step > 3 ? 'past' : ''}>
                            <Formik
                            initialValues={{
                                valor: 0,
                            }}

                            validationSchema={paySchema}>
                            {({isValid}) => (

                            <Form>
                                <h2>3. Forma de Pagamento</h2>
                                <p>O pagamento será feito na entrega.</p>

                                    <div  className='pay-options'>
                                        <label onClick={() => setPayForm('Dinheiro')}>
                                            <Field type="radio" name="picked" value="Dinheiro" checked/>
                                            Dinheiro
                                        </label>
                                        <label onClick={() => setPayForm('Crédito')}>
                                            <Field type="radio" name="picked" value="Crédito" />
                                            Crédito
                                        </label>

                                        <label onClick={() => setPayForm('Débito')}>
                                            <Field type="radio" name="picked" value="Débito"/>
                                            Débito
                                        </label>
                                        <label onClick={() => setPayForm('Pix')}>
                                            <Field type="radio" name="picked" value="Pix" />
                                            Pix
                                        </label>
                                    </div>

                                    <div className={`pay-form ${payForm === 'Dinheiro' ? 'active' : ''}`}>
                                        <span htmlFor='valor'>Valor:</span>
                                        <Field type='number' id='valor' name='valor' placeholder='Troco para qunato?'/>
                                        <div className='error_message'><ErrorMessage name='valor'/></div>
                                    </div>
                                
                                <button onClick={()=> setStep(2)} type='button'>{'<'} Voltar</button>
                                <button disabled={!isValid && payForm === 'Dinheiro'} onClick={() => setStep(4)} className={isValid ? 'valid' : ''}>Continuar {'>'}</button>

                            </Form>

                            )}
                             </Formik>
                            
                        </PayForm>

                        <ReviewForm className={step === 4 ? 'current' : ''}>
                            <Formik
                            onSubmit={() => {
                                window.open(`https://wa.me//5517991266168?text=Olá, sou teste e nada`, '_blank')
                            }}
                        >
                            {() => (

                            <Form>
                                <h2>4. Revisar e finalizar pedido</h2>
                                <p>Revise os Dados acima e os valores para finalizar sua compra.</p>

                                <button onClick={()=> setStep(3)} type='button'>{'<'} Voltar</button>
                                <button type='submit'>Enviar</button>
                            </Form>

                            )}
                            </Formik>
                
                        </ReviewForm>


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
                                <button onClick={() => AddCart(item)}>+</button>
                                <span> {item.quantity} </span>
                                <button onClick={() => RemoveItemCart(item.id)}>-</button>
                            </p>
                        </div>
                    </CartItem>
                ))}

                <p>Valor total: R${cartValue.toFixed(2).toString().replace(".", ",")}</p>
            </CartList>
            </CheckoutCartContainer>
        </CheckoutContainer>
    )
}