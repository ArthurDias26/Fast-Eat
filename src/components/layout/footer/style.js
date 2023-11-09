import styled from 'styled-components'

export const FooterBox = styled.footer`
padding: 15px;
    background-color: ${props => props.theme.redlight};
    color: white;
    font-size: 18px;
    margin-top: 15vh;

    @media (max-width: 920px) {
        font-size: 14px;

        div div img{
            width: 25px;
            height: 25px;
    }
    }

    @media (max-width: 680px) {
        font-size: 12px;

        div div img{
            width: 20px;
            height: 20px;
    }
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
        
        a{
            padding: 8px 8px 3px 8px;
            border-radius: 14px;
            transition: all .2s;
        }

        img{
            width: 35px;
            height: 35px;
        }

        a:hover{
            background-color: ${props => props.theme.reddark};
        }
    }
`