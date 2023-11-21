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

    @media (max-width: 1080px) {
        font-size: 52px;
    }

    @media (max-width: 820px) {
        font-size: 44px;
    }

    @media (max-width: 540px) {
        font-size: 36px;
    }
    @media (max-width: 460px) {
        font-size: 32px;
    }
`

export const FoodTypes = styled.div`
    margin: auto;
    margin-top: 25px;
    display: block;
    width: 80%;
    display: flex;
    align-items: center;

    @media (max-width: 1080px) {
        width: 90%;
    }

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

        @media (max-width: 1080px) {
        font-size: 16px;
        }

        @media (max-width: 820px) {
        font-size: 14px;
        padding: 6px 0;
        }

        @media (max-width: 620px) {
        font-size: 12px;
        padding: 6px 0;
        }
}
`

export const FoodCards = styled.section`
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 40px;
    width: 80vw;
    flex-wrap: wrap;
`

export const FoodCard = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 12px;
    width: 22%;
    border-radius: 12px;
    box-shadow: inset.5px .5px 1px #777;
    box-shadow: .5px .5px 4px #bbb;
    text-align: center;
    margin-bottom: 25px;

    @media (max-width: 1080px) {
        width: 28%;
        font-size: 14px;
    }

    @media (max-width: 820px) {
        width: 35%;
        font-size: 14px;
    }

    @media (max-width: 620px) {
        width: 75%;
        font-size: 14px;
    }

    
    img{
        width: 100%;
        border-radius: 4px;
    }

    h2, p{
        margin-top: 5px;
    }

    button{
        margin-top: 10px;
        padding: 10px 24px;
        background-color: ${(props) => props.theme.redlight};
        border-radius: 8px;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        transition: all .2s;
    }

    button:hover{
        background-color: ${(props) => props.theme.reddark};
    }
`