import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import NotFound from "../notFound/notFound.jsx";
import ShelfLinks from "../shelfLinks/shelfLink";
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
      changeShelfOnClick: PropTypes.func.isRequired
   };

   render() {
      const {
         books,
         match,
         shelves,
         shelfNames,
         index,
         changeShelfOnClick
      } = this.props;
      let url = match.url.length > 1 ? match.url.slice(1) : match.url;

      let booksOnShelve =
         url !== "/"
            ? books.filter(book => book.shelf === url)
            : books.filter(book => book.shelf !== "none");

      if (!booksOnShelve.length) {
         return (
            <React.Fragment>
               <ShelfTitle>
                  {match.url === "/" ? "Your books" : shelfNames[index]}
               </ShelfTitle>

               <ShelfLinks />
               <NotFound />
            </React.Fragment>
         );
      }
      return (
         <Route
            exact
            path={match.url}
            render={({ match }, props) => (
               <React.Fragment>
                  <ShelfTitle>
                     {match.url === "/" ? "Your books" : shelfNames[index]}
                  </ShelfTitle>

                  <ShelfLinks />
                  <GridSection>
                     {booksOnShelve.map(book => (
                        <BookPreview
                           book={book}
                           books={books}
                           match={match}
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
      );
   }
}

export default Shelf;
