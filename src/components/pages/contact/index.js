import React, { useEffect } from 'react'
import { ContactContainer, ContactForm, ContactNotes } from './style'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import {FaPhoneAlt, FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiMapPin2Fill} from 'react-icons/ri'

export default function Index() {

    const schema = yup.object().shape({
        name: yup.string()
        .required('O nome é obrigatório')
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .max(35, 'O nome deve ter no máximo 35 caracteres'),

        message: yup.string()
        .required('A mensagem é obrigatória')
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
    <ContactContainer>
        <div className='flex_container'>

            <h1>Entre em contato</h1>

            <ContactForm>
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
                        <span htmlFor='name'>Nome:</span>
                        <Field type='text' id='name' name='name'/>
                        <div className='error_message'><ErrorMessage name='name'/></div>

                        <span htmlFor='message'>Mensagem:</span>
                        <Field type='text' id='message' as='textarea' rows='10' name='message'/>
                        <div className='error_message'><ErrorMessage name='message'/></div>

                        <button type='submit' disabled={!isValid} className={isValid ? 'valid' : ''}>Enviar <FaWhatsapp/></button>
                    </Form>

                    )}
                </Formik>
            </ContactForm>

            <ContactNotes>

            <h3>Informações de contato</h3>

                <ul>
                    <li><RiMapPin2Fill/> Rua Figuerira Nº333, Valentim Gentil/SP</li>

                    <li><MdEmail/> Email: fasteat@gmail.com</li>

                    <li><FaPhoneAlt/> Telefone (17)99170-7070</li>
                </ul>

            <h3>Nossas redes sociais:</h3>

                <a href="https://www.instagram.com/" rel="noreferrer"><FaInstagram/></a>
                <a href="https://www.facebook.com/?locale=pt_BR" rel="noreferrer"><FaFacebook/></a>
                <a href="https://wa.me//5517991266168" rel="noreferrer"><FaWhatsapp/></a>

            </ContactNotes>
        </div>
    </ContactContainer>
  )
}