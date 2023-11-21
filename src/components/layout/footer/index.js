import { FooterBox, FlexBox, SocialIcons } from "./style"

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function index() {

    return(
        <FooterBox>
            <FlexBox>
        
            <div>
                <h2>Contato</h2>
                <p>Telefone (17)99170-7070</p>
                <p>fasteat@gmail.com</p>
            </div>

            <div>
                <h2>Horário</h2>
                <p>seg a sex: 10:00 às 22:00</p>
                <p>sáb e dom: 17:00 às 24:00</p>
            </div>

            <div>
                <h2>Endereço</h2>
                <p>Rua Figuerira, Nº333</p>
                <p>Valentim Gentil/SP</p>
            </div>

            </FlexBox>


            <SocialIcons>
                
                <p>Siga nossas redes sociais:</p>

                <div>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                    <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noreferrer"><FaFacebook/></a>
                    <a href="https://wa.me//5517991266168" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
                </div>

            </SocialIcons>
        </FooterBox>
    )
}