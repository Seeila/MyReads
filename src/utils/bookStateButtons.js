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
            <ul role="listbox">
               {shelves.map((shelf, index) => (
                  <li key={shelf}>
                     {shelf === 'all' && (
                       <Link to="/" className="shelf-button">All</Link>
                     )}
                     {shelf === 'currentlyReading' && (
                        <Link to="/reading" className="shelf-button">Reading</Link>
                     )}
                     {shelf === 'wantToRead' && (
                       <Link to="/whishlist" className="shelf-button">Whishlist</Link>
                     )}
                     {shelf === 'read' && (
                       <Link to="/read" className="shelf-button">Read</Link>
                     )}
                  </li>
               ))}
            </ul>
         </div>
      )
   }
}


export default BookStateButtons
