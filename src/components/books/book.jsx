import React, { Component } from "react";
import PropTypes from "prop-types";
import {
   BannerDiv,
   BookHeader,
   BookTitlesDiv,
   BookTitle,
   BookCover,
   BookAuthors,
   BookSubtitle,
   BookInfosSection,
   BookDescription,
   RatingSection,
   StarImage,
   Rating,
   BackButton
} from "./style";
import star from "../../img/icons/star.svg";

class Shelf extends Component {
   static propTypes = {
      books: PropTypes.array.isRequired,
      match: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
   };
   render() {
      const { books, match, history } = this.props;
      const book = books.find(
         el =>
            el.shelf === match.params.id ||
            el.id === match.params.id ||
            el.id === match.params.id
      );

      function mapArrays(arr, name) {
         let returnedElement = "";
         arr.forEach((element, index) => {
            if (element.length > 1) {
               index === 0
                  ? (returnedElement += element)
                  : (returnedElement = returnedElement + ", " + element);
            } else {
               return (returnedElement = element);
            }
         });
         return returnedElement;
      }

      let authors = mapArrays(book.authors, authors);
      let categories = book.categories
         ? mapArrays(book.categories, categories)
         : "";

      return (
         <React.Fragment>
            <BackButton onClick={history.goBack}>◀ Back</BackButton>
            <BannerDiv book={book} />
            <BookHeader>
               <BookCover src={book.imageLinks.thumbnail} alt="" />
               <BookTitlesDiv>
                  <BookTitle>{book.title}</BookTitle>
                  <BookAuthors>{authors}</BookAuthors>
               </BookTitlesDiv>
               <BookSubtitle>Summary</BookSubtitle>
               <BookDescription>{book.description}</BookDescription>
            </BookHeader>
            <BookInfosSection>
               {book.categories && (
                  <div>
                     <BookSubtitle>Categories:</BookSubtitle>
                     <p>{categories}</p>
                  </div>
               )}
               {book.pageCount && (
                  <div>
                     <BookSubtitle>Pages:</BookSubtitle>
                     <p>{book.pageCount}</p>
                  </div>
               )}
               {book.publishedDate && (
                  <div>
                     <BookSubtitle>Published on:</BookSubtitle>
                     <p>{book.publishedDate}</p>
                  </div>
               )}
               {book.publisher && (
                  <div>
                     <BookSubtitle>Publisher:</BookSubtitle>
                     <p>{book.publisher}</p>
                  </div>
               )}
            </BookInfosSection>

            {book.averageRating && (
               <RatingSection>
                  <BookSubtitle>Rating:</BookSubtitle>
                  <Rating>
                     {book.averageRating}
                     <StarImage src={star} />
                     <br />
                     <small>{book.ratingsCount} ratings</small>
                  </Rating>
               </RatingSection>
            )}
         </React.Fragment>
      );
   }
}

export default Shelf;
