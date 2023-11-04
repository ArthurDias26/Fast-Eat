import styled from 'styled-components'

export const HeaderBox = styled.header`
    padding: 0 5vw;
    min-height: 50px;
    height: 12vh;
    background-color: ${props => props.theme.redlight};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px #444;
`

export const IconBox = styled.div`
        max-width: 10vh;
        min-width: 40px;

    img{
        max-width: 100%;
    }
`

export const MenuBox = styled.div`

    a{
        text-decoration: none;
    }

    span{
        color: white;
        padding: 6px;
        margin-right: 2vw;
        border-radius: 4px;
        transition: all .4s;
        font-weight: 700;
    }

    span:hover{
        color: ${props => props.theme.reddark};
    }
`