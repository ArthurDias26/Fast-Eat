import { Home, Outdoor, Cards, Card, ButtonArea, MenuOptionsContainer, MenuOptions, Option } from "./style"
import LinkButton from '../../layout/linkButton'

import smartphoneIcon from '../../../assets/images/smartphone.png'
import menuIcon from '../../../assets/images/cardapio.png'
import deliveryIcon from '../../../assets/images/entrega.png'

import pizza from '../../../assets/images/pizza-back.jpg'
import esfirra from '../../../assets/images/esfirras.jpg'
import bebidas from '../../../assets/images/bebidas.jpg'



export default function index() {

    return(
        <Home>
            <Outdoor>
                    <h2>BEM VINDO A FAST EAT,</h2>
                    <h1>CONHEÇA NOSSO CARDAPIO.</h1>
                    <LinkButton link='/menu' text='Clique Aqui!'/>
            </Outdoor>

            <Cards>
                <div class='flex'>

                    <Card>
                        <img src={smartphoneIcon} alt='smartphone'/>
                        <h2>Faça o pedido em casa</h2>
                        <p>Maecenas vel leo nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at orci sit amet est accumsan semper nec vitae mi.</p>
                    </Card>

                    <Card>
                        <img src={menuIcon} alt='smartphone'/>
                        <h2>Faça o pedido em casa</h2>
                        <p>Maecenas vel leo nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at orci sit amet est accumsan semper nec vitae mi.</p>
                    </Card>

                    <Card>
                        <img src={deliveryIcon} alt='smartphone'/>
                        <h2>Faça o pedido em casa</h2>
                        <p>Maecenas vel leo nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at orci sit amet est accumsan semper nec vitae mi.</p>
                    </Card>

                </div>

                
            </Cards>

            <ButtonArea>
                <LinkButton link='/menu' text='Peça Agora!'/>
            </ButtonArea>

            <MenuOptionsContainer>
                <h1>VEJA AS OPÇÕES DO CARDÁPIO</h1>

                <MenuOptions>

                    <Option href="/menu">
                        <img src={pizza} alt='smartphone'/>
                        <h3>Pizzas</h3>
                    </Option>

                    <Option href="/menu">
                        <img src={esfirra} alt='smartphone'/>
                        <h3>Pizzas</h3>
                    </Option>

                    <Option href="/menu">
                        <img src={bebidas} alt='smartphone'/>
                        <h3>Pizzas</h3>
                    </Option>

                    

                </MenuOptions>

            </MenuOptionsContainer>

        </Home>
    )
}