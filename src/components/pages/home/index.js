import { Home, Outdoor, Cards, Card, ButtonArea, MenuOptionsContainer, MenuOptions, Option, Map } from "./style"
import LinkButton from '../../layout/linkButton'

import { useEffect } from "react"

import smartphoneIcon from '../../../assets/images/smartphone.png'
import menuIcon from '../../../assets/images/cardapio.png'
import deliveryIcon from '../../../assets/images/entrega.png'

import pizza from '../../../assets/images/pizza-back.jpg'
import esfirra from '../../../assets/images/esfirras.jpg'
import bebidas from '../../../assets/images/bebidas.jpg'



export default function Index() {

    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [])

    return(
        <Home>
            <Outdoor>
                        <h2>BEM VINDO A FAST EAT,</h2>
                        <h1>CONHEÇA NOSSO CARDÁPIO!</h1>
                        <LinkButton link='/menu' text='Clique Aqui'/>
            </Outdoor>

            <Cards>
                <div class='flex'>

                    <Card>
                        <img src={smartphoneIcon} alt='smartphone'/>
                        <h2>Faça seu pedido em casa</h2>
                        <p> Compre pelo site para ter uma melhor comodidade, sem precisar sair de casa ou enfrentar filas e trânsito. Acesse o site, escolha seus pratos e aguardar a entrega.</p>
                    </Card>

                    <Card>
                        <img src={menuIcon} alt='smartphone'/>
                        <h2>Veja as opções do menu</h2>
                        <p>Acesse o cardápio completo, escolha seus pratos favoritos e finalize o pedido em poucos cliques, com várias opções de pagamento, como cartão de crédito, débito e Pix.</p>
                    </Card>

                    <Card>
                        <img src={deliveryIcon} alt='smartphone'/>
                        <h2>Velocidade na entrega</h2>
                        <p>Com a rapidez na entrega você pode receber seus pratos em poucos minutos, acompanhando o status do seu pedido em tempo real, garantindo sua comida quentinha e saborosa.</p>
                    </Card>

                </div>

                
            </Cards>

            <ButtonArea>
                <LinkButton link='/menu' text='Peça Agora'/>
            </ButtonArea>

            <MenuOptionsContainer>
                <h1>Veja as opções do cardápio</h1>

                <MenuOptions>

                    <Option href="/menu">
                        <img src={pizza} alt='smartphone'/>
                        <h3>Pizzas</h3>
                        <div className="back-black"></div>
                    </Option>

                    <Option href="/menu">
                        <img src={esfirra} alt='smartphone'/>
                        <h3>Esfirras</h3>
                        <div className="back-black"></div>
                    </Option>

                    <Option href="/menu">
                        <img src={bebidas} alt='smartphone'/>
                        <h3>Bebidas</h3>
                        <div className="back-black"></div>
                    </Option>

                    

                </MenuOptions>

            </MenuOptionsContainer>

            <Map>
                <h1>Localização</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572.146981706316!2d-50.08025029270346!3d-20.415159622168208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9497e30d7fa80c73%3A0xf021bae45d284a03!2sPizzaria%20Nappi!5e0!3m2!1spt-BR!2sbr!4v1699462111354!5m2!1spt-BR!2sbr" title="Map"/>
                <a href="https://www.google.com/maps/dir//Pizzaria+Nappi,+Av.+Carlos+Glerian,+194+-+Jd.+Monte+Belo,+Valentim+Gentil+-+SP,+15520-000/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x9497e30d7fa80c73:0xf021bae45d284a03!3e0?sa=X&ved=2ahUKEwiesOWD87SCAxXSLrkGHXcNC-0Qox16BAgSEAA" target="_blank" rel="noreferrer">Veja a melhor rota</a>
            </Map>


        </Home>
    )
}