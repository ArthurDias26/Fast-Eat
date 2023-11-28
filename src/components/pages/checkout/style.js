import styled from "styled-components"

export const CheckoutContainer = styled.div`
    background-color: white;
    width: 80%;
    min-height: 68vh;
    border-radius: 12px;
    padding: 8px;
    margin: auto;
    display: block;
    margin-top: 22vh;
    display: flex;
`

export const CheckoutFormContainer = styled.section`
    width: 65%;

    h2{
        margin-bottom: 15px;
    }

    input[type=text], input[type=number]{
        width: 90%;
        margin: auto;
        border: .5px solid black;
        padding: 4px;
        font-size: 16px;
    }
    
`

export const DeliveyForm = styled.div`

    div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
     div, span, label, p, select{
        display: block;
    }  
    
    input, button{
        display: inline-block;
    }
    }

    &.past{
     div, span, label, p, select{
        display: block;
        color: gray;
        pointer-events: none;
    }  
    
    input{
        display: inline-block;
        pointer-events: none
    }
 
    button{
        display: none;
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
     div, span, input, label, p, select{
        display: block;
    }   
    button{
        display: inline-block;
    }
    }

    &.past{
     div, span, label, p, select{
        display: block;
        color: gray;
        pointer-events: none;
    }  
    
    input{
        display: inline-block;
        background-color: white;
        color: gray !important;
        pointer-events: none
    }
 
    button{
        display: none;
    }
    }
`

export const PayForm = styled.div`
div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
      span, label, p, button, select{
        display: block;
    }   
    input, button{
        display: inline-block;
    }
    }

    &.past{
     div, span, label, p, select{
        display: block;
        color: gray;
        pointer-events: none;
    }  
    
    input{
        display: inline-block;
        background-color: white;
        color: gray !important;
        pointer-events: none
    }
 
    button{
        display: none;
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
      span, input, label, p, select{
        display: block;
    }   
    button{
        display: inline-block;
    }
    }
`

export const CheckoutCartContainer = styled.section`
    width: 35%;
`

export const CartList = styled.div`
    padding: 12px;
    overflow: auto;
    
`

export const CartItem = styled.div`
    display: flex;
    margin-bottom: 30px;
    font-size: 18px;

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

    button{
        background-color: transparent;
        border: none;
        font-size: 20px;
        transform: all .25s;
        cursor: pointer;

        &:hover{
            color: ${(props) => props.theme.reddark};
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