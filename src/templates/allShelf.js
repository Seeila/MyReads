import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookShelf from './shelf';
import PropTypes from 'prop-types';

class AllBookshelves extends Component {

   static propTypes = {
      shelves: PropTypes.array.isRequired,
      books: PropTypes.array.isRequired,
      updateCurrentShelf : PropTypes.func.isRequired,
      changeShelfName: PropTypes.func.isRequired
   }


   render() {
      const { shelves, books, updateCurrentShelf,changeShelfName } = this.props;

      return (
         <div>
         {shelves.map((shelf) => (
               <BookShelf
               shelf={shelf}
               changeShelfName={changeShelfName}
               books={books}
               updateCurrentShelf={updateCurrentShelf}
               key={shelf}/>
         ))}
         </div>

      )
   }
}


export default AllBookshelves
