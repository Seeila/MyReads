import styled from "styled-components";

const ShelfButton = styled.button`
   position: absolute;
   top: -10px;
   right: -8px;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: none;
   background: linear-gradient(to bottom, var(--yellow), var(--orange));
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.5s;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
   cursor: pointer;

   &:hover {
      transform: scale(1.2);
   }
`;

const ShelfNav = styled.nav`
   position: absolute;
   top: -78px;
   right: -8px;
   z-index: 1000;
   padding: 10px 15px;
   background: var(--grey);
   border-radius: 50px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

   visibility: ${state => (state.showChooseShelf ? "visible" : "hidden")};
`;

const ShelfImage = styled.img`
   width: 75%;
`;

const ChooseShelfButtons = styled(ShelfButton)`
   position:relative;
   width:45px;
   top:auto;
   right:auto;
   height:45px;
   border:none;
   box-shadow:none;
   margin:0 15px;
   transition: all 0.3s;

   &:hover {
      transform:scale(1.4);
      transform-origin:bottom;
   }

   &:after {
      content:'${props => props.shelf}';
      position:absolute;
      top:-20px;
      left:0;
      width:50px;
      height:10px;
      z-index:1000;
      color:var(--grey);
      font-weight:700;
      text-align:center;
      text-transform:capitalize;
      opacity:0;
   }

      &:hover:after{
         opacity:1;
      }
`;

export { ShelfButton };
export { ShelfImage };
export { ShelfNav };
export { ChooseShelfButtons };
