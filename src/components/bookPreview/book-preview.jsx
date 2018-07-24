import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ShelfButtons from "../shelfBtn/shelfButtons";
import {
   ArticleStyled,
   BookThumbnail,
   BookTitle,
   BookAuthors,
   BookDescription
} from "./style";

class BookPreview extends Component {
   static propTypes = {
      books: PropTypes.array.isRequired,
      book: PropTypes.object.isRequired,
      match: PropTypes.object.isRequired,
      shelves: PropTypes.array.isRequired,
      shelfNames: PropTypes.array.isRequired,
      changeShelfOnClick: PropTypes.func.isRequired,
      removeFromShelfOnClick: PropTypes.func.isRequired
   }

   render() {
      const {
         books,
         book,
         match,
         shelves,
         shelfNames,
         changeShelfOnClick,
         removeFromShelfOnClick
      } = this.props;

      let authors = "";
      book.authors.forEach((author, index) => {
         if (book.authors.length > 1) {
            index === 0
               ? (authors += author)
               : (authors = authors + ", " + author);
         } else {
            authors = author;
         }
      });

      let bookIndex = books.findIndex(bookElement => {
         return bookElement.id === book.id;
      });

      return (
         <ArticleStyled {...this.props}>
            <Link to={match.url !== '/' ? `${match.url}/${book.id}` : `/${book.id}`}>
               <BookThumbnail
                  src={book.imageLinks.smallThumbnail}
                  alt={book.title}
               />
               <BookTitle>{book.title}</BookTitle>
               <BookAuthors>{authors}</BookAuthors>
               <BookDescription
                  line={5}
                  truncateText="…"
                  text={book.description}
               />
            </Link>
            <ShelfButtons
               shelves={shelves}
               book={book}
               shelfNames={shelfNames}
               bookIndex={bookIndex}
               changeShelfOnClick={changeShelfOnClick}
               removeFromShelfOnClick={removeFromShelfOnClick}
            />
         </ArticleStyled>
      );
   }
}

export default BookPreview;
