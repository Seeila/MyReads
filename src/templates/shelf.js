import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Book from '../components/book-preview';
import PropTypes from 'prop-types';

class Bookshelf extends Component {

   static propTypes = {
      shelf: PropTypes.string.isRequired,
      books: PropTypes.array.isRequired,
      updateCurrentShelf : PropTypes.func.isRequired,
      changeShelfName: PropTypes.func.isRequired
   }


   render() {
      const { shelf, books, updateCurrentShelf,changeShelfName } = this.props;

      // if the shelf is not all, filter the book with their shelf location
      let booksOnShelve = shelf !== 'all' ? books.filter((book) => book.shelf === shelf) : books;

      let shelfName = changeShelfName(shelf);

      return (
         <section className='book-shelf' id={shelfName}>
            <h2>{shelfName}</h2>
            {booksOnShelve.map((book) => (
               <Book
                  book={book}
                  shelf={shelf}
                  updateCurrentShelf={updateCurrentShelf}
                  key={book.id}
               />
            ))}
         </section>

      )
   }
}


export default Bookshelf
