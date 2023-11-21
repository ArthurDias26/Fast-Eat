import styled from 'styled-components'

export const FooterBox = styled.footer`
padding: 15px;
    background-color: ${props => props.theme.redlight};
    color: white;
    font-size: 18px;
    margin-top: 15vh;

    @media (max-width: 920px) {
        font-size: 14px;

    }

    @media (max-width: 680px) {
        font-size: 12px;

    }

    @media (max-width: 480px) {
        div{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            div{
                margin-top: 8px;
            }

        }

    }

`

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const SocialIcons = styled.div`
    p{
        text-align: center;
        margin-top: 32px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row !important;
        margin-top: 8px;
        
        a{
            transition: all .2s;
            font-size: 32px;
            color: white;
            padding: 0 8px;

            @media (max-width: 860px) {
                font-size: 28px;    
            }

            @media (max-width: 520px) {
                font-size: 22px;    
            }
        }

        a:hover{
            color: ${props => props.theme.reddark};
        }
    }
`