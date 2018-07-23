import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import ShelfButtons from '../shelfBtn/shelfButtons';
import PropTypes from "prop-types";
import {ArticleStyled, BookThumbnail, BookTitle, BookAuthors, BookDescription} from "./style";

class BookPreview extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { books, book,match, shelves,shelfNames, changeShelfOnClick} = this.props;

    let authors = "";
    book.authors.forEach((author, index) => {
      if (book.authors.length > 1) {
        index === 0 ? (authors += author) : (authors = authors + ", " + author);
      } else {
        authors = author;
      }
    });

    let bookIndex = books.findIndex(bookElement => {
      if(bookElement.id === book.id) return bookElement;
   });

   console.log(bookIndex);

    return (
      <ArticleStyled{...this.props}>
        <Link to={`${match.url}/${book.id}`}>
          <BookThumbnail
            src={book.imageLinks.smallThumbnail}
            alt={book.title}
          />
          <BookTitle>{book.title}</BookTitle>
          <BookAuthors>{authors}</BookAuthors>
        </Link>
        <BookDescription line={5} truncateText="…" text={book.description}/>
        <ShelfButtons shelves={shelves} book={book} shelfNames={shelfNames} bookIndex={bookIndex} changeShelfOnClick={changeShelfOnClick}/>
      </ArticleStyled>
    );
  }
}

export default BookPreview;
