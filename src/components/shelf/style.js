import styled from "styled-components";

const ShelfTitle = styled.h2`
   display: inline-block;
   margin: 20px 0;
   padding-bottom: 3px;
   font-size: 2rem;
   color: var(--grey);
   border-bottom: 2px solid var(--grey);
   text-transform: capitalize;

   @media screen and (min-width: 800px) {
      font-size: 2.5rem;
   }
`;

const GridSection = styled.section`
   margin-top: 40px;
   @media screen and (min-width: 750px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
      align-items: center;
      grid-area: hagrid;
      grid-auto-flow: row;
   }
   @media screen and (min-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px;
   }
`;

export { ShelfTitle };
export { GridSection };
