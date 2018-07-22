import styled from 'styled-components';

const Wrapper = styled.section`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content:center;
   align-items:center;
   overflow: hidden;
   background: linear-gradient(to bottom, rgba(255,79,0,0.5), rgba(255,255,0,0.5));
`;

const Image = styled.img`
   min-width: 100%;
   height:100%;
   position: fixed;
   top: 50%;
   left: 50%;
   z-index:-1;
   transform: translate(-50%,-50%);

   @media (orientation: landscape) {
      width:100%;
      height:auto;
      min-height:100%;
    }
`;

const Logo = styled.h1`
  font-family:var(--lobster);
  color:#fff;
  font-size:15vw;

  @media screen and (min-width: 1025px) {
     font-size:10em;
  }
`
export {Wrapper};
export {Image};
export {Logo} ;
