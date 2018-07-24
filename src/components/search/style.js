import styled from "styled-components";
import {BackButton} from "../books/style";


const SearchInput = styled.input`
border: 1px solid var(--orange);
height:15px;
width:100%;
max-width:400px;
display:block;
border-radius:50px;
padding: 20px;
font-size:1.1em;
`;

const CloseButton = styled(BackButton)`
   margin: 0;
   position:absolute;
   top:130px;
   right:30px;

   & img{
      width:30px;
   }
`;

export { SearchInput };
export { CloseButton };
