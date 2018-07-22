import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import PropTypes from "prop-types";
import {ArticleStyled, BookThumbnail, BookTitle, BookAuthors, BookDescription, ShelfButton} from "./style";

class BookPreview extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book, match } = this.props;

    let authors = "";
    book.authors.forEach((author, index) => {
      if (book.authors.length > 1) {
        index === 0 ? (authors += author) : (authors = authors + ", " + author);
      } else {
        authors = author;
      }
    });

    return (
      <ArticleStyled{...this.props}>
        <Link to={`${match.url}/${book.id}`}>
          <BookThumbnail
            src={book.imageLinks.smallThumbnail}
            alt={book.title}
          />
          <BookTitle>{book.title}</BookTitle>
          <BookAuthors>{authors}</BookAuthors>
         <BookDescription line={5} truncateText="…" text={book.description}/>
          <ShelfButton aria-label={book.shelf}>
            X
          </ShelfButton>
        </Link>
      </ArticleStyled>
    );
  }
}

export default BookPreview;
