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
   padding: 12vh 0 0 3vw;
   color: ${props => props.theme.orange};

   h2{
      font-size: 2.5vw;
   }

   h1{
      margin-bottom: 35px;
      font-size: 4.5vw;
   }


   img{
      max-width: 100%;
      max-height: 100%;
      transform: rotate(270deg);
   }

   @media (max-width: 860px) {
    background-size: 100%;
    background-position: bottom;

    a{
      font-size: 26px;
    }

    h2{
      font-size: 4.5vw;
   }

   h1{
      margin-bottom: 15px;
      font-size:8vw;
   }

   }

   @media (max-width: 680px) {
    background-size: 100%;
    background-position: bottom;

    a{
      font-size: 26px;
    }

    h2{
      font-size: 4vw;
   }

   h1{
      margin-bottom: 10px;
      font-size: 12vw;
   }

   }

`

export const Cards = styled.section`
   margin-top: 10vh;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   padding: 5vh 0;

   div.flex{
      display: flex;
      justify-content: space-around;
      width: 80%;

   @media (max-width: 1440px) {
      width: 100%;
   }

   @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
   }
      
   }

 
`

export const Card = styled.div`
   padding: 40px 15px;
   border-radius: 15px;
   background-color: white;
   max-width: 25%;
   box-shadow: .5px .5px 4px #bbb;
   text-align: center;
   font-size: 16px;

   h2{
      margin: 18px 0 5px 0;
   }

   img{
      width: 75%;
   }

   @media (max-width: 1600px) {
   font-size: 14px;
   }

   @media (max-width: 800px) {
   font-size: 12px;
   max-width: 28%;
   }

   @media (max-width: 640px) {
   max-width: 60%;
   margin-bottom: 25px;
   }
`

export const ButtonArea = styled.div`
   display: flex;
   justify-content: center;
   pad: 15px 0;
   font-size: 24px;
`

export const MenuOptionsContainer = styled.section`
   padding: 15vh 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   h1{
      font-size: 28px;
      margin-bottom: 3.5vh;
      color: ${props => props.theme.orange};
   }
`

export const MenuOptions = styled.div`
   padding: 20px 15px;
   box-shadow: .5px .5px 4px #bbb;
   background-color: white;
   border-radius: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 80vw;

   @media (max-width: 560px) {
      flex-direction: column;

      a{
         width: 100%;
         margin-bottom: 12px;
      }

      a:last-child{
         margin-bottom: 0px;
      }
   }
   
`

export const Option = styled.a`
   width: 33%;
   text-align: center;
   color: black;
   text-decoration: none;
   border-radius: 12px;
   position: relative;
   margin: 0 8px;

   img{
      max-width: 100%;
      border-radius: 12px;
   }

   h3{
      position: absolute;
      top: 50%;
      text-align: center;
      width: 100%;
      color: transparent;
      transition: all .2s;
      transform: translate(0, -50%);
      font-size: 34px;
   }

   div.back-black{
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      transition: all .2s;
      border-radius: 12px;

      }

   &:hover{
      h3{
         color: white;
         z-index: 100;
      }

      div.back-black{
         background-color: #71031773;
      }

   }
`

export const Map = styled.section`

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 20px;

   h1{
      margin-bottom: 3vh;
      font-size: 38px;
   }

   iframe{
      width: 100%;
      height: 35vh;
   }

   a{
      margin-top: 5vh;
      text-decoration: none;
      color: white;
      padding: 14px 42px;
      border-radius: 26px;
      background-color: ${props => props.theme.orange};
      font-weight: bold;
      transition: all .2s;
   }

   a:hover{
      background-color: ${props => props.theme.reddark};
   }

   @media (max-width: 460px) {
      iframe{
      height: 25vh;
   }
   }
`