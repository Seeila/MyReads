import styled from 'styled-components';


const ShelfTitle = styled.h2`
   display:inline-block;
   margin: 20px 20px 0;
   padding-bottom:3px;
   font-size: 2rem;
   color:var(--grey);
   border-bottom:2px solid var(--grey);
   text-transform:capitalize;

   @media screen and (min-width:800px) {
      margin-left: 40px;
      font-size: 2.5rem;
   }
`;


export {ShelfTitle};
