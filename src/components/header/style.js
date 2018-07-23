import styled from "styled-components";

const StylingHeader = styled.header`
   width: 100%;
   height: 75px;
   padding: 20px;
   box-sizing: border-box;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: linear-gradient(to bottom, var(--yellow), var(--orange));

   @media (min-width: 1000px) {
      padding: 20px 40px;
   }
`;

const Logo = styled.h1`
   font-family: var(--lobster);
   font-size: 3rem;
   color: #fff;
`;

const SearchIcon = styled.img`
   width: 30px;
   margin-top: 10px;
   position: relative;
   transition: 1s;

   &:hover {
      transform: scale(1.5);
   }
`;

export { StylingHeader };
export { Logo };
export { SearchIcon };
