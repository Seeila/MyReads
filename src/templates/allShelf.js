import React, { Component } from 'react';
import BookShelf from './shelf';
import PropTypes from 'prop-types';

class AllBookshelves extends Component {

   static propTypes = {
      shelves: PropTypes.array.isRequired,
      books: PropTypes.array.isRequired,
      changeShelfName: PropTypes.func.isRequired
   }


   render() {
      const { shelves, books, changeShelfName } = this.props;

      return (
         <div>
         {shelves.map((shelf) => (
               <BookShelf
               shelf={shelf}
               changeShelfName={changeShelfName}
               books={books}
               key={shelf}/>
         ))}
         </div>

      )
   }
}


export default AllBookshelves
