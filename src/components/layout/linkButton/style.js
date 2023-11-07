import styled from 'styled-components'

export const LinkButton = styled.a`
    padding: 12px 46px;
    text-decoration: none;
    color: white;
    border-radius: 26px;
    background-color: ${props => props.theme.redlight};
    transition: all .35s;
    font: 18;

    &:hover{
        background-color: ${props => props.theme.reddark};
    }
`