import React, { Component } from "react";
import { Route } from "react-router-dom";
import ShelfLinks from "../shelfLinks/shelfLink";
import Book from "../books/book";
import BookPreview from "../bookPreview/book-preview";
import { ShelfTitle, GridSection } from "./style";

class Shelf extends Component {
   render() {
      const {
         books,
         match,
         history,
         shelves,
         shelfNames,
         index,
         changeShelfOnClick
      } = this.props;
      let shelf = match.url.length > 1 ? match.url.slice(1) : match.url;

      let booksOnShelve =
         shelf !== "all" && shelf !== "/"
            ? books.filter(book => book.shelf === shelf)
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
                     changeShelfOnClick={changeShelfOnClick}
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
                        {shelfNames[index] === "all"
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
