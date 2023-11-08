import { HeaderBox, IconBox, MenuBox } from "./style"
import { Link } from "react-router-dom"
import Logo from '../../../assets/images/entregawhite.png'

export default function index() {

    return(
        <HeaderBox>

            <IconBox>
                <Link to={'/'}>
                <img src={Logo} alt="Minha Figura"/>
                </Link>
            </IconBox>

            <MenuBox>

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

            </MenuBox>

        </HeaderBox>
    )
}