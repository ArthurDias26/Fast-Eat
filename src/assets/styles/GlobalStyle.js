import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100%;
        font-family: 'nunito', sans-serif;
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