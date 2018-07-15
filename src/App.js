import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import BookStateButtons from './utils/bookStateButtons';
import * as BooksAPI from './utils/BooksAPI';

class App extends Component {

   state = {
      books: [],
      currentShelf: 'all',
      shelves: [],

   }

   componentDidMount() {
      BooksAPI.getAll().then((books) => {
         this.setState({ books }) // ({contacts}) = ({ contacts: contacts})
      }).then((books) => {
         //makes a list of the different existing book shelves
         let shelves = [... new Set( this.state.books.map(book => book.shelf) )]
         this.setState({shelves});
         console.log(this.state.shelves);
      });
   }


      updateCurrentShelf = (shelf) => {
         this.setState((state) => ({
            currentShelf: shelf
         }), this.consoleThis)

      }

      consoleThis() {
         console.log(this.state.currentShelf);
      }

   render() {
      let showingBooks = this.state.books;
      console.log(showingBooks);
      const { shelves } = this.state
      console.log(shelves.length);

      if(shelves.length) {
         return (
            <div className="app">

               <Route path="/" render={() => (
                  <header className="app-header">
                    <Link to="/" className="app-logo">MyReads</Link>
                    <Link to="/search" className="app-search">Search</Link>
                  </header>
               )}/>

               <Route exact path="/search" render={() => (
                  <header className="app-header">
                    <Link to="/" className="app-logo">MyReads</Link>
                  </header>
               )}/>

               <main className="app-content">
                  <BookStateButtons currentShelf={this.state.currentShelf} shelves={this.state.shelves} updateCurrentShelf={this.updateCurrentShelf}/>
               </main>

               <footer className="app-footer">
                   Copyright Sarah Hick - 2018
               </footer>

            </div>
         );
      } else {
         return(<p>Still loading</p>);
      }

   }
}

export default App;
