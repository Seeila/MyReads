import styled from "styled-components";
import TextTruncate from "react-text-truncate";

const ArticleStyled = styled.article`
   width:100%;
   min-height:200px;
   margin: 20px 0 40px;
   padding: 20px 20px 20px 110px;

   display:flex;
   flex-direction:column;
   align-items:flex-start;
   justify-content:center;
   position:relative;

   background:  linear-gradient(to right, rgba(202,48,88,0.8), rgba(255,153,72,0.8)), url('${props =>
      props.thumb}') no-repeat center center;
   background-size:cover;
   color:#fff;

   @media screen and (min-width: 750px) {
         margin: 0;
   }

   &:nth-of-type(3n){
      background: linear-gradient(to right, rgba(164,72,255,0.8), rgba(4,137,203,0.8)), url('${props =>
         props.thumb}') no-repeat center center;
         background-size:cover;
   }

   &:nth-of-type(2n){
      background: linear-gradient(to right, rgba(255,153,72,0.8), rgba(164,72,255,0.8)), url('${props =>
         props.thumb}') no-repeat center center;
         background-size:cover;
   }

   &:nth-of-type(4n){
      background: linear-gradient(to right, rgba(4,137,203,0.8), rgba(202,48,88,0.8)), url('${props =>
         props.thumb}') no-repeat center center;
         background-size:cover;
   }
   &:nth-of-type(7n){
      background: linear-gradient(to right, rgba(164,72,255,0.8), rgba(4,137,203,0.8)), url('${props =>
         props.thumb}') no-repeat center center;
         background-size:cover;
   }

`;

const BookThumbnail = styled.img`
   width: 100px;
   position: absolute;
   top: -10px;
   left: -10px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const BookTitle = styled.h3`
   font-size: 1.2em;
   font-weight: 700;
`;

const BookAuthors = styled.h4`
   font-size: 1.2em;
   font-weight: 500;
   margin: 10px 0;
`;

const BookDescription = styled(TextTruncate)`
   font-size: 0.92em;
   )line-height: 1.2em;
`;

const ShelfButton = styled.button`
   position: absolute;
   top: -15px;
   right: -15px;
   width: 45px;
   height: 45px;
   border-radius: 50%;
   border: none;
   background: linear-gradient(to bottom, var(--yellow), var(--orange));
`;

export { ArticleStyled };
export { BookThumbnail };
export { BookTitle };
export { BookAuthors };
export { BookDescription };
export { ShelfButton };
