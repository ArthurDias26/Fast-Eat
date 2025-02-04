import styled from "styled-components"

export const CheckoutContainer = styled.div`
    background-color: white;
    width: 80%;
    min-height: 68vh;
    border-radius: 12px;
    padding: 20px;
    margin: auto;
    display: block;
    margin-top: 22vh;
    display: flex;
   box-shadow: .5px .5px 4px #bbb;

   @media (max-width: 1120px) {
    width: 90%;
   }

   @media (max-width: 960px) {
    width: 80%;
    flex-direction: column;
   }

   @media (max-width: 768px) {
    margin-top: 18vh;
   }
`

export const CheckoutFormContainer = styled.section`
    width: 65%;

    h2{
        margin-bottom: 15px;
        color: gray;
    }

    p{
        margin-top: 10px;
    }

    input[type=text], input[type=number]{
        width: 90%;
        margin: auto;
        outline: none;
        border: none;
        border-bottom: .5px solid black;
        padding: 4px;
        font-size: 16px;
        transition: all 1.5s;
    }

    label{
        margin-right: 5px;
    }

    span{
        margin-top: 15px;
    }

    button{
        border: none;
        outline: none;
        color: white;
        background-color: ${(props) => props.theme.redlight};
        padding: 8px 14px;
        border-radius: 6px;
        transition: all .25s;
        font-size: 16px;
        margin: 10px 10px 15px 0;
    }

    button:hover{
        background-color: ${(props) => props.theme.reddark};
    }

    @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 50px;
   }
    
`

export const DeliveyForm = styled.div`

    div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
     div, span, p, h2{
        color: black;
        display: block;
    }  
    
    input, button, label, select{
        display: inline-block;
    }
    }

    &.past{
     div, span, label, p, h2{
        display: block;
        color: gray;
        pointer-events: none;
    }  

    select{
        background-color: gray;
    }
    
    input{
        display: inline-block;
        pointer-events: none;
        color: grey;
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
    
    span:first-child{
        width: max-content;
        display: inline-block;
        margin-right: 20px;
    }

    select{
        display: inline-block;
        color: white;
        background-color: ${(props) => props.theme.redlight};
        border: none;
        outline: none;
        padding: 4.5px 8px;
        border-radius: 4px;
    }

    margin-bottom: 45px;
`

export const ContactForm = styled.div`
    div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
     div, span, input, label, p, select, h2{
        color: black;
        display: block;
    }   
    button{
        display: inline-block;
    }
    }

    &.past{
     div, span, label, p, select, h2{
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
    
    margin-bottom: 45px;
`

export const PayForm = styled.div`
div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
      div, span, p, button, select, h2{
        display: block;
    }   
    input, label, button{
        display: inline-block;
    }

    h2{
        color: black;
    }

    }

    &.past{
     div, span, p, select, h2{
        display: block;
        color: gray;
        pointer-events: none;
    }  

    label{
        display: inline-block;
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

    div.pay-options{
        margin-top: 12px;
    }
    
    div.pay-form{
        display: none;
    }

    div.pay-form.active{
        display: block;
    }

    margin-bottom: 45px;

`

export const ReviewForm = styled.div`
div, span, input, label, p, button, select{
        display: none;
    }
    &.current{
      span, input, label, p, select, h2{
        color: black;
        display: block;
    }   
    button{
        display: inline-block;
    }
    }

    margin-bottom: 45px;
`

export const CheckoutCartContainer = styled.section`
    width: 35%;
    max-height: 80vh;
    overflow-y: scroll;

    @media (max-width: 960px) {
    width: 60%;
    margin: auto;
   }

   @media (max-width: 680px) {
    width: 95%;
   }
`

export const CartList = styled.div`
    padding: 12px;
    overflow: auto;
    border: 1.5px solid darkgray;
    
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