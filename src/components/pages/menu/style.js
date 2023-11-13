import styled from "styled-components";

export const FoodMenu = styled.div`
`

export const MenuTitle = styled.section`

    background-color: ${(props) => props.theme.yelow};
    color: ${(props) => props.theme.orange};
    display: flex;
    align-items: center;
    font-size: 64px;
    padding: 50px 0 50px 25px;
`

export const FoodTypes = styled.div`
margin: auto;
margin-top: 25px;
display: block;
width: 80%;
display: flex;
align-items: center;

button{
    width: 20%;
    padding: 8px 0;
    background-color: ${(props) => props.theme.redlight};
    color: white;
    transition: all .2s;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: ${(props) => props.theme.reddark};
    }
}
`

export const FoodCards = styled.section`
`

export const FoodCard = styled.div`
`