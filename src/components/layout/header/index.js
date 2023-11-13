import React, {useState, useEffect} from 'react'

import { HeaderBox, IconBox, MenuBox, MenuIcon, MenuMobile, SocialIcons } from "./style"
import { Link } from "react-router-dom"

import LinkButton from '../../layout/linkButton'
import Logo from '../../../assets/images/entregawhite.png'
import MenuIcone from '../../../assets/images/icons8-menu-50.png'

import instagramLogo from '../../../assets/images/instagram-icon.png'
import facebookLogo from '../../../assets/images/facebook-icon.png'
import twitterLogo from '../../../assets/images/twitter-icon.png'


export default function Index() {

    const [widthState, setWidthState] = useState(0)
    const [isOpen, setIsOpen] = useState(0)

    const setView = () => {
        setWidthState(window.innerWidth)       
    }

    const toogleMenu = () =>{
        setIsOpen((open) => !open)
        console.log(isOpen)
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
                    <span>Ìnicio</span>
                </Link>

                <Link to={'/menu'}>
                    <span>Cardápio</span>
                </Link>

                <Link to={'/reserve'}>
                    <span>Reservas</span>
                </Link>

                <Link to={'/contact'}>
                    <span>Contato</span>
                </Link>
                </>
            ) : (
                <>
                    <MenuIcon>
                        <img src={MenuIcone} alt="Icone do menu" onClick={toogleMenu}/>             
                    </MenuIcon>

                    <MenuMobile className={isOpen ? 'is-open' : ''}>

                        <button className='closeButton' onClick={toogleMenu}>X</button>            

                        <Link to={'/'}>
                        <span>Ìnicio</span>
                        </Link>

                        <Link to={'/menu'}>
                            <span>Cardápio</span>
                        </Link>

                        <Link to={'/reserve'}>
                            <span>Reservas</span>
                        </Link>

                        <Link to={'/contact'}>
                            <span>Contato</span>
                        </Link>

                        <div className='button'>
                            <LinkButton link='/menu' text='Fazer Pedido'/>
                        </div>

                        <SocialIcons>
                            <p>Siga nossas redes sociais:</p>

                            <div>
                                <a href="/"><img src={instagramLogo} alt='logo instagram'/></a>
                                <a href="/"><img src={facebookLogo} alt='logo instagram'/></a>
                                <a href="/"><img src={twitterLogo} alt='logo instagram'/></a>
                            </div>
                    </SocialIcons>

                    </MenuMobile>
                </>
            )}
                

            </MenuBox>

        </HeaderBox>
    )
}