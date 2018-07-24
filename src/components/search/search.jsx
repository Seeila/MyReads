import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';
import BookPreview from "../bookPreview/book-preview";
import Book from "../books/book";
import escapeRegExp from 'escape-string-regexp'
import CloseIcon from "../../img/icons/close.svg";
import {GridSection, ShelfTitle} from "../shelf/style";
import {SearchInput, CloseButton} from "./style";

class Search extends Component {
   static propTypes = {
      books: PropTypes.array.isRequired,
      match: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      shelves: PropTypes.array.isRequired,
      shelfNames: PropTypes.array.isRequired,
      changeShelfOnClick: PropTypes.func.isRequired,
      removeFromShelfOnClick: PropTypes.func.isRequired
   }

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

      const { books, match, history, shelves, shelfNames, changeShelfOnClick, removeFromShelfOnClick } = this.props
      const { query } = this.state

      let showingBooks;
      if (query) {
         const matchResults = new RegExp(escapeRegExp(query), 'i')
         showingBooks = books.filter((book) => matchResults.test(book.title) || matchResults.test(book.authors)|| matchResults.test(book.categories))
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
                     <SearchInput type="text" placeholder="Search book by title, author or categories" value={query} onChange={event => this.updateQuery(event.target.value)} />
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
                              removeFromShelfOnClick={removeFromShelfOnClick}
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
                     {...props}
                  />
               )}
            />
         </React.Fragment>
      );
   }
}

export default Search;
