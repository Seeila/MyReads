import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import BookPreview from "../bookPreview/book-preview";
import CloseIcon from "../../img/icons/close.svg";
import { GridSection, ShelfTitle } from "../shelf/style";
import { SearchInput, CloseButton } from "./style";

class Search extends Component {
   static propTypes = {
      books: PropTypes.array.isRequired,
      match: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      shelves: PropTypes.array.isRequired,
      shelfNames: PropTypes.array.isRequired,
      changeShelfOnClick: PropTypes.func.isRequired
   };
   constructor(props) {
      super(props);
      this.state = {
         query: ""
      };
   }

   updateQuery = query => {
      this.setState({ query: query.trim() });
      if (query.length > 0) this.props.updateSearchResults(query);
   };

   render() {
      const {
         books,
         match,
         history,
         shelves,
         shelfNames,
         changeShelfOnClick,
         showingBooks
      } = this.props;
      const { query } = this.state;

      console.log(showingBooks);

      return (
         <React.Fragment>
            <CloseButton onClick={history.goBack} aria-label="close">
               <img src={CloseIcon} alt="close" />
            </CloseButton>
            <ShelfTitle>Search</ShelfTitle>
            <SearchInput
               type="text"
               min="0"
               placeholder="Search book by title, author or categories"
               value={query}
               onChange={event => this.updateQuery(event.target.value)}
            />

            {showingBooks.length && (
               <GridSection>
                  {showingBooks.map(book => (
                     <BookPreview
                        book={book}
                        books={showingBooks}
                        match={match}
                        shelves={shelves}
                        shelfNames={shelfNames}
                        changeShelfOnClick={changeShelfOnClick}
                        key={book.id}
                     />
                  ))}
               </GridSection>
            )}
         </React.Fragment>
      );
   }
}

export default Search;
