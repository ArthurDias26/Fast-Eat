import {CheckoutContainer, CheckoutFormContainer, CheckoutCartContainer, CartList, CartItem, DeliveyForm, ContactForm, PayForm, ReviewForm } from './style'

import React, {useState, useEffect, useContext} from 'react'
import { CartContext } from "../../../contexts/CartContext";

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default function Index() {

    const [step, setStep] = useState(1)
    const [deliveryType, setDeliveryType] = useState('')
    const [payForm, setPayForm] = useState('Dinheiro')

    const {cart, AddCart, RemoveItemCart} = useContext(CartContext)   

   const [CartItens, setCartItens] = useState([])


   useEffect(()=> {
       setCartItens(cart)
   }, [cart])

   const deliverySchema = yup.object().shape({
    cidade: yup.string()
    .required('A cidade é obrigatório'),

    bairro: yup.string()
    .required('Você deve colocar o bairro para a entrega')
    .min(5, 'coloque um endereço com no minimo 5 caracteres'),

    rua: yup.string()
    .required('Você deve colocar a rua para a entrega')
    .min(5, 'coloque um endereço com no minimo 5 caracteres'),

    numero: yup.number()
    .required('Você deve colocar o número da casa para a entrega')
    
})

const contactSchema = yup.object().shape({
    nome: yup.string()
    .required('Você deve colocar o seu nome'),

    telefone: yup.number()
    .required('Você deve colocar o número de telefone')
    .min(8, 'coloque um número de telefone valido')
})

const schema = yup.object().shape({
    nome: yup.string()
    .required('O nome é obrigatório')
    .min(3, 'O nome deve ter no mínimo 3 caracteres')
    .max(35, 'O nome deve ter no máximo 35 caracteres'),

    message: yup.string()
    .required('A mensagem é obrigatória')
})

    return(
        <CheckoutContainer>
            <CheckoutFormContainer>

                        <DeliveyForm className={step === 1 ? 'current' : ''}>
                            <Formik
                            initialValues={{
                                cidade: 'Valentim-Gentil',
                                bairro: '',
                                rua: '',
                                numero: ''
                            }}

                            onSubmit={(values) => {
                                window.open(`https://wa.me//5517991266168?text=Olá, sou ${values.name} e ${values.message}`, '_blank')
                            }}
                            validationSchema={deliverySchema}
                        >
                            {({isValid}) => (

                            <Form>
                                <h2>Método de entrega</h2>
                                <label onClick={() => setDeliveryType('Retirada no local')}>
                                    <Field type="radio" name="picked" value="One" checked/>
                                    Retirar na loja
                                </label>
                                    <p>Rua Figuerira, Nº333 Valentim Gentil/SP</p>
                                <label onClick={() => setDeliveryType('Entrega')}>
                                    <Field type="radio" name="picked" value="two" />
                                    Entrega
                                </label>

                                <div className={`delivery-info ${deliveryType === 'Entrega' ? 'active' : ''}`}>
                                    <span htmlFor='cidade'>Cidade:</span>
                                    <Field as="select" name="cidade">
                                        <option value="Valentim-Gentil">Valentim Gentil</option>
                                        <option value="otuporanga">Votuporanga</option>
                                        <option value="Meridiano">Meridiano</option>
                                    </Field>

                                    <span htmlFor='bairro'>Bairro:</span>
                                    <Field type='text' id='bairro' name='bairro'/>
                                    <div className='error_message'><ErrorMessage name='bairro'/></div>

                                    <span htmlFor='rua'>Rua:</span>
                                    <Field type='text' id='rua' name='rua'/>
                                    <div className='error_message'><ErrorMessage name='rua'/></div>

                                    <span htmlFor='numero'>Número da casa:</span>
                                    <Field type='number' id='numero' name='numero'/>
                                    <div className='error_message'><ErrorMessage name='numero'/></div>
                                </div>

                                <br/>
                                <button onClick={()=> setStep(2)} disabled={!isValid} className={isValid ? 'valid' : ''}>Continuar</button>
                            </Form>

                            )}
                            </Formik>
                        
                        </DeliveyForm>

                        <ContactForm className={step === 2 ? 'current' : ''}>

                            <Formik
                            initialValues={{
                                nome: undefined,
                                telefone: '',
                            }}

                            onSubmit={(values) => {
                                window.open(`https://wa.me//5517991266168?text=Olá, sou ${values.name} e ${values.message}`, '_blank')
                            }}
                            validationSchema={contactSchema}>
                            {({isValid}) => (

                            <Form>
                                <h2>Informações de contato</h2>

                                <span htmlFor='nome'>Nome:</span>
                                <Field type='text' id='nome' name='nome'/>
                                <div className='error_message'><ErrorMessage name='nome'/></div>

                                <span htmlFor='telefone'>Telefone de conatato:</span>
                                <Field type='number' id='telefone' name='telefone'/>
                                <div className='error_message'><ErrorMessage name='telefone'/></div>

                                <button onClick={()=> setStep(3)} disabled={!isValid} className={isValid ? 'valid' : ''}>Continuar</button>

                            </Form>

                            )}
                            </Formik>
                            

                        </ContactForm>

                        <PayForm className={step === 3 ? 'current' : ''}>
                            <Formik
                            initialValues={{
                                name: '',
                                number: '',
                                message: ''
                            }}

                            onSubmit={(values) => {
                                window.open(`https://wa.me//5517991266168?text=Olá, sou ${values.name} e ${values.message}`, '_blank')
                            }}
                            validationSchema={schema}>
                            {({isValid}) => (

                            <Form>
                                <h2>Forma de Pagamento</h2>
                                <p>O pagamento será feito na entrega.</p>

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

                                    <div className={`pay-form ${payForm === 'Dinheiro' ? 'active' : ''}`}>
                                        <span htmlFor='name'>Valor:</span>
                                        <Field type='text' id='name' name='name' placeholder='Troco para qunato?'/>
                                        <div className='error_message'><ErrorMessage name='name'/></div>
                                    </div>

                                <button onClick={()=> setStep(4)} disabled={!isValid} className={isValid ? 'valid' : ''}>Continuar</button>

                            </Form>

                            )}
                             </Formik>
                            
                        </PayForm>

                        <ReviewForm className={step === 4 ? 'current' : ''}>
                            <Formik
                            initialValues={{
                                name: '',
                                number: '',
                                message: ''
                            }}

                            onSubmit={(values) => {
                                window.open(`https://wa.me//5517991266168?text=Olá, sou ${values.name} e ${values.message}`, '_blank')
                            }}
                            validationSchema={schema}
                        >
                            {({isValid}) => (

                            <Form>
                                <h2>Revisar e finalizar pedido</h2>
                                <p>Revise os Dados acima e os valores para finalizar sua compra.</p>

                                <button type='submit' disabled={!isValid} className={isValid ? 'valid' : ''}>Enviar</button>
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