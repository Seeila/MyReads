import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';


class ShelfLinks extends Component {

   static propTypes = {
      shelves: PropTypes.array.isRequired,
      shelvesName: PropTypes.array.isRequired,
   }

   render() {
     const { shelves, shelvesName } = this.props;

      return (
         <div className='book-state-buttons'>
            <nav>
               {shelves.map((shelf, index) => (
                  <Link to={`/${shelf}`} className="shelf-button" key={shelf}>{shelvesName[index]}</Link>
               ))}
            </nav>
         </div>
      )
   }
}


export default ShelfLinks
