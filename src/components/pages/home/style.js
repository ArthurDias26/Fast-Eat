import styled from 'styled-components'
import BackImage from '../../../assets/images/pizza.png'

export const Home = styled.div`
   
`

export const Outdoor = styled.section`
   background-image: url(${BackImage});
   min-height: 88vh;
   background-position: right bottom;
   background-size: 60%;
   background-color: ${props => props.theme.yelow};
   background-repeat: no-repeat;
   color: white;
   font-size: 30px;
   padding: 10vw 0 0 15px;
   background-attachment: fixed;
   color: ${props => props.theme.orange};

   h1{
      margin-bottom: 35px;
      font-size: 4.5vw;
   }

   @media (max-width: 800px) {
    background-size: 100%;
    background-position: -%;

   }

`

export const Cards = styled.section`
   margin-top: 10vh;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 50px 0;

   div.flex{
      display: flex;
      justify-content: space-around;
      width: 80%;
   }
`

export const Card = styled.div`
   padding: 20px;
   border-radius: 15px;
   background-color: white;
   img{
      width: 20vw;
   }
`