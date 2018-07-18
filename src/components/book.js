import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class Book extends Component {

   render() {
      const { shelf, book} = this.props;
      // <article className='book' style={{
      //    backgroundImage: `url(${book.imageLinks.thumbnail})`
      //    }}>
      //    <Link to={`/book/${book.id}`}>
      //       <img src={book.imageLinks.smallThumbnail} alt="{book.title}" className="book-cover"/>
      //       <h3 className="book-title">{book.title}</h3>
      //       <h4 className="book-authors">{authors}</h4>
      //       <p className="book-description">{book.description}</p>
      //       <button className="book-shelf" aria-label={book.shelf}>X</button>
      //    </Link>
      // </article>

      return (

         <div><p>Hello</p></div>

      )
   }
}


export default Book
