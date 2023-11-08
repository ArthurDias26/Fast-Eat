import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,700;1,200;1,400;1,700&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100%;
        font-family: 'nunito', sans-serif;
        background-color: #F9F2EA;

    }

    h1, h2, h3, h4, h5, h6, a{
        font-family: 'Barlow', sans-serif;

    }

    html{
        scrollbar-color: #555 #fff;
    }

    body::-webkit-scrollbar{
        width: 12px;
    }
 
    body::-webkit-scrollbar-track {
    background: #f6f6f6;        
    }

    body::-webkit-scrollbar-thumb {
    background-color: #555;    
    border-radius: 20px;       
    }

`

export default GlobalStyle