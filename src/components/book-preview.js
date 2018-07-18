import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BookPreview extends Component {

   static propTypes = {
      book: PropTypes.object.isRequired,
      shelf: PropTypes.string.isRequired,
   }


   render() {
      const { shelf, book} = this.props;

      let authors = '';
      book.authors.forEach((author, index) => {
         if(book.authors.length > 1) {
            index === 0 ? authors += author : authors = authors + ', ' + author;
         } else {
            authors = author;
         }
      });

      return (
         <article className='book' style={{
            backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}>
            <Link to={{pathname: `/book/${book.id}`,  params : {book: book, bookId: book.id, authors: authors}}}>
               <img src={book.imageLinks.smallThumbnail} alt="{book.title}" className="book-cover"/>
               <h3 className="book-title">{book.title}</h3>
               <h4 className="book-authors">{authors}</h4>
               <p className="book-description">{book.description}</p>
               <button className="book-shelf" aria-label={book.shelf}>X</button>
            </Link>
         </article>
      )
   }
}


export default BookPreview
