import React, {useState, useEffect} from 'react'

import { HeaderBox, IconBox, MenuBox, MenuIcon, MenuMobile, SocialIcons} from "./style"
import { Link } from "react-router-dom"

import LinkButton from '../../layout/linkButton'
import Cart from '../cart'
import Logo from '../../../assets/images/entregawhite.png'

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


export default function Index() {

    const [widthState, setWidthState] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)




    const setView = () => {
        setWidthState(window.innerWidth)       
    }

    const toogleMenu = () =>{
        setIsMenuOpen((open) => !open)
    }

    useEffect(()=> setView())


    return(
        <HeaderBox>

            <IconBox>
                <Link to={'/'}>
                <img src={Logo} alt="Icone Delivery"/>
                </Link>
            </IconBox>

            <MenuBox>

            { widthState >= 768 ? (
                <>
                <Link to={'/'}>
                    <span>Início</span>
                </Link>

                <Link to={'/menu'}>
                    <span>Cardápio</span>
                </Link>

                <Link to={'/contact'}>
                    <span>Contato</span>
                </Link>

                <Cart/>
                </>
            ) : (
                <div>
                    <MenuIcon>
                    <IoIosMenu onClick={toogleMenu} />            
                    </MenuIcon>

                    <Cart/>

                    <MenuMobile className={isMenuOpen ? 'is-open' : ''}>

                        <button className='closeButton' onClick={toogleMenu}>X</button>            

                        <Link to={'/'} onClick={toogleMenu}>
                        <span>Início</span>
                        </Link>

                        <Link to={'/menu'} onClick={toogleMenu}>
                            <span>Cardápio</span>
                        </Link>

                        <Link to={'/contact'} onClick={toogleMenu}>
                            <span>Contato</span>
                        </Link>

                        <div className='button' onClick={toogleMenu}>
                            <LinkButton link='/menu' text='Fazer Pedido' />
                        </div>

                        <SocialIcons>
                            <p>Siga nossas redes sociais:</p>

                            <div>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                                <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noreferrer"><FaFacebook/></a>
                                <a href="https://wa.me//5517991266168" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
                            </div>
                    </SocialIcons>

                    </MenuMobile>
                </div>
            )}
                

            </MenuBox>

        </HeaderBox>
    )
}