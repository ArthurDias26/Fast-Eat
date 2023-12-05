import styled from 'styled-components'

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

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }
    
    button.checkout{
        width: calc(30vw - 16px);
        color: white;
        display: block;
        margin: auto;
        padding: 8px 0;
        position: fixed;
        font-size: 26px;
        bottom: 0;
        transition: all .25s;
        background-color: ${(props) => props.theme.redlight};

        @media (max-width: 1440px) {
            width: calc(40vw - 16px);
        }

        @media (max-width: 980px) {
            width: calc(50vw - 16px);
        }

        @media (max-width: 768px) {
            width: calc(65vw - 16px);
        }
    }

    button.checkout:hover{
        background-color: ${(props) => props.theme.reddark};
    }

`

export const CartBox = styled.div`

    position: fixed;
    top: 0;
    right: -30vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 30vw;
    background-color: white;
    color: black;
    transition: all .35s;
    box-shadow: inset.5px .5px 3px #bbb;

    button.checkout{
        right: -65vw;
    }

    &.active{
        top: 0;
        right: 0;

        button.checkout{
        right: 16px;
        }

    }

    div.empty-cart{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 28px;
        font-weight: bold;
    }

    @media (max-width: 1440px) {
        width: 40vw;
        right: -40vw;

        button.checkout{
        right: -40vw;
        }

    }

    @media (max-width: 980px) {
        width: 50vw;
        right: -50vw;

        button.checkout{
        right: -50vw;
        }
    }

    @media (max-width: 768px) {
        width: 65vw;
        right: -65vw;

        button.checkout{
        right: -65vw;
        }

        div.empty-cart{
        font-size: 22px;
    }
    }

`

export const CartList = styled.div`
    padding: 36px 1px 54px 12px;
    overflow: auto;

    
`

export const CartItem = styled.div`
    display: flex;
    margin-bottom: 30px;

    img{
        width: 45%;
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