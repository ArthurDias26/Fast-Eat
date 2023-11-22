import styled from 'styled-components'

export const HeaderBox = styled.header`
    padding: 0 5vw;
    min-height: 50px;
    height: 12vh;
    background-color: ${props => props.theme.redlight};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px #444;
    font-size: 20px;

    @media (max-width: 1024px) {
        font-size: 16px;

        div img{
            max-width: 8vh;
        }
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }

`

export const IconBox = styled.div`
        max-width: 10vh;
        min-width: 40px;

    img{
        max-width: 100%;
    }
`

export const MenuBox = styled.div`

    a{
        text-decoration: none;
    }

    span{
        color: white;
        padding: 6px;
        margin-right: 2vw;
        border-radius: 4px;
        transition: all .25s;
        font-weight: 700;
    }

    span:hover{
        color: ${props => props.theme.reddark};
    }

    @media (max-width: 768px) {
        > div{
            display: flex;
            align-items: center;
        }   
    }
`

export const CartContainer = styled.div`

    width: max-content;
    display: inline-block;
    color: black;

    svg{
        color: white;
    }

    button{
        background-color: transparent;
        border: none;
        font-size: 32px;
        color: black;
        transition: all .35s;
        cursor: pointer;

        &:hover{
            color: ${(props) => props.theme.reddark};
        }
    }

    button.close{
        position: absolute;
        right: 12px;
        top: 12px;
        z-index: 10;
    }
    
    button.checkout{
        width: 90%;
        color: white;
        display: block;
        margin: auto;
        padding: 8px 0;
        border-radius: 8px;
        background-color: ${(props) => props.theme.redlight};
    }

`

export const CartBox = styled.div`

    position: fixed;
    top: 0;
    right: -65vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 30vw;
    background-color: white;
    color: black;
    transition: all .45s;

    &.active{
        top: 0;
        right: 0;
    }

    @media (max-width: 1520px) {
        
    }
`

export const CartList = styled.div`
    padding: 12px;
    overflow: auto;

    
`

export const CartItem = styled.div`
    display: flex;
    margin-bottom: 30px;

    img{
        max-width: 40%;
        border-radius: 8px;
    }

    div{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h3{
        text-align: center;
        display: block;
        width: 100%;
    }

    button.remove{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 6px 10px;
        border-radius: 8px;
        background-color: ${(props) => props.theme.redlight};
        color: white;
        font-size: 24px;

        &:hover{
            background-color: ${(props) => props.theme.reddark};
        }
    }

    p{
        max-width: 90%;
        text-align: center;
        margin-top: 8px;
    }

    span{
    color: black;
        width: max-content;
        padding: 0;
        margin: 0;
    }
`

export const MenuIcon = styled.div`
    font-size: 42px;
    display: block;
    margin-right: 16px;
`

export const MenuMobile = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 65vw;
    background-color: ${(props) => props.theme.reddark};
    color: black;
    z-index: 10;
    color: white;
    top: 0;
    right: -65vw;
    transition: all .4s;

    &.is-open{
        right: 0;
    }

    .closeButton{
        position: absolute;
        right:12px;
        top: 12px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 32px;
        font-weight: 300;
        cursor: pointer;
    }

    div.button{
        display: block;
        margin-top: 50px;
        font-size: 22px;

        div:hover{
            background-color: ${(props) => props.theme.orange};

            a span{
                color: white;
            }
        }

        span{
            margin: 0;
        }
    }

    a span{
        font-size: 22px;
        display: block;
        margin-top: 25px;

        &:hover{
            color: ${(props) => props.theme.yelow};
        }
    }
`

export const SocialIcons = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;

    p{
        text-align: center;
        margin-bottom: 15px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        
        a{
            padding: 8px 8px 3px 8px;
            border-radius: 14px;
            transition: all .2s;
            font-size: 26px;
            color: white;
            padding: 0 8px;
        }

        a:hover{
            color: ${props => props.theme.reddark};
        }

        a:hover{
            background-color: ${props => props.theme.redlight};
        }
    }
`