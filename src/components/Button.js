import styled from 'styled-components';


export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  font-family: 'Oswald', sans-serif !important;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: var(--lightCyan); 
  color: var(--lightCyan);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: var(--lightCyan);
    color: var(--mainWhite);
    
  }
  &focus{
    outline: none;
  }
`;