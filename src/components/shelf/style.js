import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';

const SectionStyled = styled.section`
   padding: 20px 30px 20px 40px;
   @media screen and (min-width:750px) {
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
      align-items: center;
      grid-area: hagrid;
      grid-auto-flow: row;
   }
   @media screen and (min-width:1300px) {
      grid-template-columns: repeat(3, 1fr);
         grid-gap: 50px;
   }
`;


export {SectionStyled};
