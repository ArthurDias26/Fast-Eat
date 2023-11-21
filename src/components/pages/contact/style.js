import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    min-height: 88vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    div.flex_container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        align-items: flex-start;

        h1{
            width: 100%;
            text-align: center;
            margin-bottom: 6vh;
        }

        @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        h1{
            margin-top: 80px;
        }
    }

    }
    
`

export const ContactForm = styled.div`
    form{
        padding: 30px;
        border-radius: 12px;
        background-color: #dedede;
        min-width: 400px;
        max-width: 90vw;
        box-shadow: .5px .5px 4px rgba(0, 0, 0, 0.5);
    }

    form span{
        display: block;
        font-size: 1.2em;
        margin-bottom: 4px;
    }

    form input, textarea{
        width: 100%;
        border: none;
        outline: none;
        padding: 12px;
        border-radius: 4px;        
        font-size: 16px;
    }

    div.error_message{
        margin-bottom: 20px;
    }

    form button{
        width: 100%;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 10px;
        padding: 12px;
        cursor: pointer;
        transition: all .25s;
        background-color: #128C7E;
        font-size: 18px;
        color: white;
    }

    form button.valid:hover{
        background-color: #075E54;
    }

    @media (max-width: 1050px) {
        form{
            min-width: 350px;
        }
    }

    @media (max-width: 768px) {
        form{
            min-width: 400px;
        }
    }

    @media (max-width: 500px) {
        form{
            min-width: 0;
            width: 80vw;
        }
    }

`

export const ContactNotes = styled.div`
    margin-left: 60px;
    max-width: 540px;
    font-size: 1.15em;

    ul li{
        list-style: none;
        margin-bottom: 10px;
    }
    
    h3{
        font-size: 1.45;
        margin: 25px 0 15px 0;
    }

    @media (max-width: 1050px) {
    margin-left: 40px;
    font-size: 1em;
    max-width: 320px;
    }

    @media (max-width: 768px) {
    margin: 40px 20px 0 20px;
    font-size: 1.15em;
    max-width: 540px;
    }
`


