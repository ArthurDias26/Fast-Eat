import styled from 'styled-components'

export const NotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 88vh;
    font-size: 24px;
    padding-left: 15px;

    h1{
        color: ${props => props.theme.reddark};
    }
`