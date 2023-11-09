import { FooterBox, FlexBox, SocialIcons } from "./style"
import instagramLogo from '../../../assets/images/instagram-icon.png'
import facebookLogo from '../../../assets/images/facebook-icon.png'
import twitterLogo from '../../../assets/images/twitter-icon.png'


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
                    <a href="/"><img src={instagramLogo} alt='logo instagram'/></a>
                    <a href="/"><img src={facebookLogo} alt='logo instagram'/></a>
                    <a href="/"><img src={twitterLogo} alt='logo instagram'/></a>
                </div>

            </SocialIcons>
        </FooterBox>
    )
}