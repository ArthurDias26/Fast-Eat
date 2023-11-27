import styled from "styled-components"

export const CheckoutContainer = styled.div`
    background-color: white;
    width: 80%;
    border-radius: 12px;
    padding: 8px;
    margin: auto;
    display: flex;
    margin-top: 35px;
`

export const CheckoutFormContainer = styled.section`
    width: 65%;
`

export const DeliveyForm = styled.div`

    div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
     div, span, input, label, p, button, select{
        display: block;
    }   
    }

    div.delivery-info{
        display: none;
    }

    div.delivery-info.active{
        display: block;
        
    }
`

export const ContactForm = styled.div`
    div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
     div, span, input, label, p, button, select{
        display: block;
    }   
    }
`

export const PayForm = styled.div`
div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
      span, input, label, p, button, select{
        display: block;
    }   
    }
    div.pay-form{
        display: none;
    }

    div.pay-form.active{
        display: block;
    }
`

export const ReviewForm = styled.div`
div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
      span, input, label, p, button, select{
        display: block;
    }   
    }
`

export const CheckoutCartContainer = styled.section`
    width: 35%;
`

export const CartList = styled.div`
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