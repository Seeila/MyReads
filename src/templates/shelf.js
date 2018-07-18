import React, { Component } from "react";
import { Route } from "react-router-dom";
import BookPreview from '../components/book-preview';
import Book from '../components/book';
import PropTypes from "prop-types";

class Bookshelf extends Component {
   static propTypes = {
      shelf: PropTypes.string.isRequired,
      books: PropTypes.array.isRequired,
      changeShelfName: PropTypes.func.isRequired
   };

   render() {
      const { shelf, books, changeShelfName } = this.props;

      // if the shelf is not all, filter the book with their shelf location
      let booksOnShelve =
         shelf !== "all" ? books.filter(book => book.shelf === shelf) : books;

      let shelfName = changeShelfName(shelf);

      return (
        <div>
          <Route path='/(|all|read)' render={() =>(
            <section className="book-shelf" id={shelfName}>
               <h2>{shelfName}</h2>
               {booksOnShelve.map((book, index) => (

                  <BookPreview
                     book={book}
                     bookIndex={index}
                     shelf={shelf}
                     key={book.id}
                  />
               ))}
            </section>
          )} />

          <Route path='/book/:bookId' render={(props) =>(

                  <Book/>

          )} />
        </div>

      );
   }
}

export default Bookshelf;
