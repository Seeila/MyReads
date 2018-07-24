import React, { Component } from "react";
import { Route } from "react-router-dom";
import BookPreview from "../bookPreview/book-preview";
import Book from "../books/book";
import escapeRegExp from 'escape-string-regexp'
import CloseIcon from "../../img/icons/close.svg";
import {GridSection, ShelfTitle} from "../shelf/style";
import {SearchInput, CloseButton} from "./style";

class Search extends Component {

   state={
      query: ''
   }
   updateQuery = (query) => {
      this.setState({ query: query.trim() });
   }

   clearQuery = () => {
      this.setState({ query: '' })
   }

   render() {

      const { books, match, history, shelves, shelfNames, changeShelfOnClick } = this.props
      const { query } = this.state

      let showingBooks;
      if (query) {
         const match = new RegExp(escapeRegExp(query), 'i')
         showingBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
      } else {
         showingBooks = books
      }

      return (
         <React.Fragment>
            <Route
               exact
               path={match.url}
               render={({ match }, props) => (
                  <React.Fragment>
                     <CloseButton onClick={history.goBack} aria-label="close"><img src={CloseIcon} alt="close" /></CloseButton>
                     <ShelfTitle>Search</ShelfTitle>
                     <SearchInput type="text" placeholder="Search book by title or author" value={query} onChange={event => this.updateQuery(event.target.value)} />
                     <GridSection>
                        {showingBooks.map(book => (
                           <BookPreview
                              book={book}
                              books={books}
                              match={match}
                              history={history}
                              shelves={shelves}
                              shelfNames={shelfNames}
                              changeShelfOnClick={changeShelfOnClick}
                              key={book.id}
                           />
                        ))}
                     </GridSection>
                  </React.Fragment>
               )}
            />

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
         </React.Fragment>
      );
   }
}

export default Search;
