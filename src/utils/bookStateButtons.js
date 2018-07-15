import React, { Component } from 'react';
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
            <ul role="listbox">
               {shelves.map((shelf, index) => (
                  <li key={shelf}>
                     {shelf === 'all' && (
                        <button
                           aria-setsize={shelves.length}
                           aria-posinset={index + 1}
                           onClick={() => updateCurrentShelf(shelf)}
                           className='book-state-button'
                        >All</button>
                     )}
                     {shelf === 'currentlyReading' && (
                        <button
                           aria-setsize={shelves.length}
                           aria-posinset={index + 1}
                           onClick={() => updateCurrentShelf(shelf)}
                           className='book-state-button'
                        >Reading</button>
                     )}
                     {shelf === 'wantToRead' && (
                        <button
                           aria-setsize={shelves.length}
                           aria-posinset={index + 1}
                           onClick={() => updateCurrentShelf(shelf)}
                           className='book-state-button'
                        >Whishlist</button>
                     )}
                     {shelf === 'read' && (
                        <button
                           aria-setsize={shelves.length}
                           aria-posinset={index + 1}
                           onClick={() => updateCurrentShelf(shelf)}
                           className='book-state-button'
                        >Read</button>
                     )}
                  </li>
               ))}
            </ul>
         </div>
      )
   }
}


export default BookStateButtons
