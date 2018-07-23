import React, { Component } from "react";
import { Route} from "react-router-dom";
import Book from "../book";
import BookPreview from "../bookPreview/book-preview";
import {SectionStyled} from "./style";

class Shelf extends Component {
  render() {
    const { books, match, shelves,shelfNames, changeShelfOnClick } = this.props;
    let shelf = match.url.length > 1 ? match.url.slice(1) : match.url;

    let booksOnShelve =
      shelf !== "all" && shelf !== "/"
        ? books.filter(book => book.shelf === shelf)
        : books;

    return (
      <SectionStyled>
        <Route
          path={`${match.url}/:id`}
          render={({ match }, props) => (
            <Book books={books} match={match} changeShelfOnClick={changeShelfOnClick} {...props}  />
          )}
        />

        <Route
          exact
          path={match.url}
          render={({ match }, props) =>
            booksOnShelve.map(book => (
              <BookPreview book={book} books={books} match={match} shelves={shelves} shelfNames={shelfNames}  changeShelfOnClick={changeShelfOnClick}{...props} key={book.id} />
            ))
          }
        />
 </SectionStyled>
    );
  }
}

export default Shelf;
