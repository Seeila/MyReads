import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class ShelfLinks extends Component {

   static propTypes = {
      currentShelf: PropTypes.string.isRequired,
      shelves: PropTypes.array.isRequired,
      updateCurrentShelf : PropTypes.func.isRequired
   }

   render() {
     console.log('you' + this.props.shelves);
      return (
         <div className='book-state-buttons'>
            <nav>
               {this.props.shelves.map((shelf, index) => (
                  <Link to={`/#${shelf}`} className="shelf-button" key={shelf}>{shelf}</Link>
               ))}
            </nav>
         </div>
      )
   }
}


export default ShelfLinks
