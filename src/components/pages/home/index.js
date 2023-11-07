import { Home, Outdoor, Cards, Card } from "./style"
import LinkButton from '../../layout/linkButton'

import smartphoneIcon from '../../../assets/images/smartphone.png'

export default function index() {

    return(
        <Home>
            <Outdoor>
                <h1>CONHEÇA NOSSO CARDAPIO.</h1>
                <LinkButton link='/menu' text='Veja Aqui!'/>
            </Outdoor>

            <Cards>
                <div class='flex'>

                    <Card>
                        <img src={smartphoneIcon} alt='smartphone'/>
                    </Card>

                    <Card>
                        <img src={smartphoneIcon} alt='smartphone'/>
                    </Card>

                    <Card>
                        <img src={smartphoneIcon} alt='smartphone'/>
                    </Card>

                </div>
            </Cards>
        </Home>
    )
}