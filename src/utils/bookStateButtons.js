import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class BookStateButtons extends Component {

   static propTypes = {
      currentShelf: PropTypes.string.isRequired,
      shelves: PropTypes.array.isRequired,
      updateCurrentShelf : PropTypes.func.isRequired
   }


   render() {
      const { shelves, updateCurrentShelf } = this.props;

      return (
         <div className='book-state-buttons'>
            <ul>
               <li className='book-state-button'>
                  <button aria-setsize={shelves.length + 1} aria-posinset="1"  onClick={() => updateCurrentShelf('all')}>All</button>
               </li>
               {shelves.map((shelf, index) => (
                  <li key={shelf} className='book-state-button'>
                     {shelf === 'currentlyReading' && (
                        <button aria-setsize={shelves.length + 1} aria-posinset={index + 2} onClick={() => updateCurrentShelf(shelf)}>Reading</button>
                     )}
                     {shelf === 'wantToRead' && (
                        <button aria-setsize={shelves.length + 1} aria-posinset={index + 2} onClick={() => updateCurrentShelf(shelf)}>Whishlist</button>
                     )}
                     {shelf === 'read' && (
                        <button aria-setsize={shelves.length + 1} aria-posinset={index + 2} onClick={() => updateCurrentShelf(shelf)}>Read</button>
                     )}
                  </li>
               ))}
            </ul>
         </div>
      )
   }
}


export default BookStateButtons
