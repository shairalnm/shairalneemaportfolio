import styled from "styled-components";

export const Ptile = styled.button`
         text-transform: capitalize;
         font-size: 1.5rem;
         background: transparent;
         border: 0.05rem solid var(--lightBlue);
         border-color: var(--lightCyan);
         .tilecolor{
           color: var(--lightCyan);
        }
        color: var(--mainDark) !important;
         border-radius: 0.5rem;
         padding: 0.2rem 0.5rem;
         cursor: pointer;
         margin: 0.2rem 0.5rem 0.2rem 0;
         transition: all 0.5s ease-in-out;
         &:hover {
           background: var(--lightCyan);
           color: var(--mainBlue);
         }
         &focus {
           outline: none;
         }
       `;
