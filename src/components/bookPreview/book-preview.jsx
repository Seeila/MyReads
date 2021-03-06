import React, { Component } from "react";
import PropTypes from "prop-types";

import ShelfButtons from "../shelfBtn/shelfButtons";
import NoThumbs from "../../img/no-thumbs.jpg";
import {
   ArticleStyled,
   BookThumbnail,
   BookTitle,
   BookAuthors,
   BookDescription
} from "./style";

class BookPreview extends Component {
   static propTypes = {
      book: PropTypes.object.isRequired,
      changeShelfOnClick: PropTypes.func.isRequired
   };

   render() {
      const { book, changeShelfOnClick } = this.props;

      let authors = "";
      if (book.authors) {
         book.authors.forEach((author, index) => {
            if (book.authors.length > 1) {
               index === 0
                  ? (authors += author)
                  : (authors = authors + ", " + author);
            } else {
               authors = author;
            }
         });
      }

      let thumb = NoThumbs;

      if (book.imageLinks && book.imageLinks.smallThumbnail) {
         thumb = book.imageLinks.smallThumbnail;
      }

      return (
         <ArticleStyled thumb={thumb} {...this.props}>
            <BookThumbnail src={thumb} alt={book.title} />

            <BookTitle>{book.title}</BookTitle>
            <BookAuthors>{authors}</BookAuthors>
            <BookDescription
               line={5}
               truncateText="…"
               text={book.description}
            />
            <ShelfButtons book={book} changeShelfOnClick={changeShelfOnClick} />
         </ArticleStyled>
      );
   }
}

export default BookPreview;
