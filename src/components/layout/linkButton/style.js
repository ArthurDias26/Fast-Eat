import styled from 'styled-components'

export const LinkButton = styled.a`
    padding: 12px 46px;
    text-decoration: none;
    color: white;
    border-radius: 12px;
    background-color: ${props => props.theme.redlight};
    transition: all .35s;

    &:hover{
        background-color: ${props => props.theme.reddark};
    }

    @media (max-width: 1024px) {
    padding: 10px 38px;
  
   }

   @media (max-width: 860px) {
    padding: 8px 32px;
    border-radius: 8px;

  
   }

   @media (max-width: 560px) {
    padding: 6px 26px;
  
   }
`