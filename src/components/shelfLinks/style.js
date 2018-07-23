import styled from "styled-components";
import { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const moveBg = keyframes`

0% {
   background-image: linear-gradient(to bottom, var(--yellow), var(--orange), var(--orange), var(--yellow));
   background-position-y: 0%;
}

100% {
   background-image: linear-gradient(to bottom, var(--yellow), var(--orange), var(--orange), var(--yellow));
   background-position-y: 100%;
}

`;

const StyledLink = styled(NavLink)`
   width: 45%;
   max-width: 150px;
   margin: 10px 0 5px;
   padding: 15px 10px;
   background-image: transparent;
   background-size: 100% 200%;
   border: 1px solid var(--orange);
   border-radius: 50px;
   color: var(--orange);
   text-align: center;
   font-size: 1rem;
   text-transform: capitalize;
   transition: 1s;

   @media screen and (min-width: 800px) {
      width: 150px;
      margin-right: 30px;
   }

   &:last-of-type {
      margin-right: 0;
   }

   &:hover {
      animation: ${moveBg} 0.3s linear forwards 1;
      color: #fff;
      transform: scale(1.1);
      border: none;
      box-shadow: 4px 5px 0 var(--orange);
   }

   &.active {
      background-image: linear-gradient(
         to bottom,
         var(--yellow),
         var(--orange),
         var(--orange),
         var(--yellow)
      );
      background-size: 100% 200%;
      background-position-y: 0%;
      color: #fff;
      border: none;
   }
`;

const Nav = styled.nav`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   position: relative;
   z-index: 100;

   @media screen and (min-width: 800px) {
      flex-wrap: no-wrap;
      justify-content: flex-start;
   }
`;

export { StyledLink };
export { Nav };
