import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';
import ShelfLinks from "../shelfLinks/shelfLink";
import Book from "../books/book";
import BookPreview from "../bookPreview/book-preview";
import { ShelfTitle, GridSection } from "./style";

class Shelf extends Component {

   static propTypes = {
      books: PropTypes.array.isRequired,
      match: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      shelves: PropTypes.array.isRequired,
      shelfNames: PropTypes.array.isRequired,
      index: PropTypes.number,
      changeShelfOnClick: PropTypes.func.isRequired,
      removeFromShelfOnClick: PropTypes.func.isRequired
   }

   render() {
      const {
         books,
         match,
         history,
         shelves,
         shelfNames,
         index,
         changeShelfOnClick,
         removeFromShelfOnClick
      } = this.props;
      let url = match.url.length > 1 ? match.url.slice(1) : match.url;

      let booksOnShelve =
         url !== "/"
            ? books.filter(book => book.shelf === url)
            : books;

      return (
         <React.Fragment>
            <Route
               path={`${match.url}/:id`}
               render={({ match }, props) => (
                  <Book
                     books={books}
                     match={match}
                     history={history}
                     {...props}
                  />
               )}
            />

            <Route
               exact
               path={match.url}
               render={({ match }, props) => (
                  <React.Fragment>
                     <ShelfTitle>
                        {match.url === "/"
                           ? "Your books"
                           : shelfNames[index]}
                     </ShelfTitle>

                     <ShelfLinks />
                     <GridSection>
                        {booksOnShelve.map(book => (
                           <BookPreview
                              book={book}
                              books={books}
                              match={match}
                              history={match.history}
                              shelves={shelves}
                              shelfNames={shelfNames}
                              changeShelfOnClick={changeShelfOnClick}
                              removeFromShelfOnClick={removeFromShelfOnClick}
                              {...props}
                              key={book.id}
                           />
                        ))}
                     </GridSection>
                  </React.Fragment>
               )}
            />
         </React.Fragment>
      );
   }
}

export default Shelf;
