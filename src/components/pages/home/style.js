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

   h1{
      margin-bottom: 35px;
      font-size: 4.5vw;
   }

   @media (max-width: 800px) {
    background-size: 100%;
    background-position: center;

   }

`

export const Cards = styled.section`
   margin-top: 10vh;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 5vh 0;

   div.flex{
      display: flex;
      justify-content: space-around;
      width: 80%;
   }

 
`

export const Card = styled.div`
   padding: 4vh 2.5vw;
   border-radius: 15px;
   background-color: white;
   max-width: 20vw;
   box-shadow: .5px .5px 4px #bbb;
   img{
      width: 15vw;
   }
`

export const ButtonArea = styled.div`
   display: flex;
   justify-content: center;
   pad: 15px 0;
   font-size: 18px;
`

export const MenuOptionsContainer = styled.section`
   padding: 15vh 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   h1{
      font-size: 2vw;
      margin-bottom: 3.5vh;
      color: ${props => props.theme.orange};
   }
`

export const MenuOptions = styled.div`
   padding: 3vh 3vw;
   box-shadow: .5px .5px 4px #bbb;
   background-color: white;
   border-radius: 30px;
   display: flex;
   width: 80vw;
`

export const Option = styled.a`
   width: 33%;
   text-align: center;
   color: black;
   text-decoration: none;
   transition: all .2s;
   border-radius: 12px;
   position: relative;
   padding: 10px;

   img{
      max-width: 100%;
   }

   h3{
      position: absolute;
      top: 50%;
      left: 50%;
      color: transparent;
      transition: all .2s;
   }

   &:hover{
      background-color: #111;

      h3{
         color: white;
      }

   }
`