import styled from "styled-components";
import TextTruncate from "react-text-truncate";

const BannerDiv = styled.div`
   width: 100%;
   height: 500px;
   position:absolute;
   left:0;
   background:  linear-gradient(to right, rgba(164,72,255,0.8), rgba(4,137,203,0.8)), url('${props =>
      props.book.imageLinks.thumbnail}') no-repeat top center;
   background-size:cover;
   z-index:-1;

   @media screen and (min-width:750px) {
      display:none;
   }
`;

const BookHeader = styled.header`
   max-width: 800px;
   margin: 130px auto 20px;
   display: flex;
   flex-wrap: wrap;

   @media screen and (min-width: 750px) {
      margin-top: 0;
   }
`;

const BookTitle = styled.h2`
   font-size: 1.2em;
   font-weight: 700;
   position: relative;

   &:before {
      content: "";
      width: 215vw;
      background: #fff;
      height: 100vh;
      position: absolute;
      top: -30px;
      left: -100vw;
      border-radius: 50%;
      z-index: -1;
      box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.2);

      @media screen and (min-width: 750px) {
         display: none;
      }
   }

   @media screen and (min-width: 750px) {
      font-size: 3em;
   }
`;

const BookTitlesDiv = styled.div`
   width: 60%;
   align-self: flex-end;

   @media screen and (min-width: 750px) {
      width: 65%;
   }
`;
const BookAuthors = styled.h3`
   font-size: 1em;
   font-weight: 500;

   @media screen and (min-width: 750px) {
      font-size: 2em;
   }
`;

const BookCover = styled.img`
   width: 30%;
   max-width: 200px;
   margin: 0 20px 0 0;
   align-self: flex-end;
`;

const BookSubtitle = styled.h4`
   max-width: 800px;
   font-weight: 700;
   line-height: 1.5em;

   &:first-of-type {
      margin-top: 20px;
   }
`;

const BookInfosSection = styled.section`
   max-width: 800px;
   margin: 20px auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding: 10px 0;
   border-top: 2px solid var(--grey);
   border-bottom: 2px solid var(--grey);

   & > * {
      width: 50%;
      margin: 10px 0;
   }

   & > *:nth-of-type(2n) {
      text-align: right;
   }
`;

const RatingSection = styled.section`
   max-width: 800px;
   margin: auto;
   display: flex;
   justify-content: space-between;
`;

const Rating = styled.p`
   text-align: right;
   font-size: 1em;
   font-weight: 700;

   & small {
      font-size: 0.7em;
      font-weight: 500;
   }
`;

const StarImage = styled.img`
   width: 25px;
   vertical-align: bottom;
`;

const BookDescription = styled.p`
   max-width: 75ch;
   margin: auto;
   flex: 0 0 100%;
   @media screen and (min-width: 750px) {
      text-align: justify;
   }
`;

const BackButton = styled.button`
   background: none;
   border: none;
   margin: 0 0 20px;
   color: var(--grey);
   font-size: 1.5em;
   display:block;
`;

export { BannerDiv };
export { BookHeader };
export { BookTitlesDiv };
export { BookTitle };
export { BookSubtitle };
export { BookCover };
export { BookAuthors };
export { BookInfosSection };
export { BookDescription };
export { RatingSection };
export { StarImage };
export { Rating };
export { BackButton };
