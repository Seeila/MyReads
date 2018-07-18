import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import AppLoader from './components/appLoader';
import ShelfLinks from './components/shelfLink';
import AllBookshelves from './templates/allShelf';
import BookShelf from './templates/shelf';
import * as BooksAPI from './utils/BooksAPI';

class App extends Component {

   state = {
      books: [],
      currentShelf: 'all',
      shelves: [],
      shelvesName: [],
   }

   componentDidMount() {
      BooksAPI.getAll().then((books) => {
         this.setState({ books }) // ({contacts}) = ({ contacts: contacts})
      }).then((books) => {
         //makes a list of the different existing book shelves
         let shelves = ['all', ...new Set( this.state.books.map(book => book.shelf) )];

          this.setState({shelves});

      }).then((books) => {
          this.changeShelfName();
      });
   }
      changeShelfName = (shelves = []) => {
        //if shelves is an array, map through it and change the names of the shelfs to set them in the state shelvesName. Used for rendering the bookshelfs and their titles
        if(Array.isArray(shelves)) {
          let shelvesName = this.state.shelves.map((shelf) => {
            if(shelf === 'currentlyReading') {
              return 'reading'
            } else if(shelf === 'wantToRead') {
              return 'whishlist'
            } else {
              return shelf
            }
          });
          this.setState({shelvesName});
          console.log('y' +this.state.shelvesName);
        // if not an array return the value of shelves. used for the titles. Used for the shelf buttons
        } else {
          if(shelves === 'currentlyReading') {
            return 'reading'
          } else if(shelves === 'wantToRead') {
            return 'whishlist'
          } else {
            return shelves
          }
        }
      }


      updateCurrentShelf = (shelf) => {
         this.setState((state) => ({
            currentShelf: shelf
         }))

      }


   render() {
      let showingBooks = this.state.books;
      console.log(showingBooks);
      const { shelves, books,currentShelf, shelvesName } = this.state;


      if(shelvesName.length) {



         return (
            <div className="app">

            <Header  />

                  <ShelfLinks
                     currentShelf={currentShelf}
                     shelves={shelves}
                     shelvesName={shelvesName}
                  />


                  {/*we map through all existing shelves*/}
                  {shelves.map((shelf) => {
                     // if the shelf is not all, show only the book of this shelf
                     if(shelf !== "all")
                        return <Route
                           key={shelf}
                           exact path={`/${shelf}`}
                           render={props => (
                              <BookShelf
                                   shelf={shelf}
                                   changeShelfName={this.changeShelfName}
                                   books={books}
                                   updateCurrentShelf={this.updateCurrentShelf}
                                   {...props}
                              />)
                           }
                        />
                     //if shelf is all, show all the shelves
                     return <Route
                        key="all"
                        exact path="/(|all)"
                        render={props => (
                           <AllBookshelves
                                shelves={shelves}
                                changeShelfName={this.changeShelfName}
                                books={books}
                                updateCurrentShelf={this.updateCurrentShelf}
                                {...props}
                           />)
                        }
                     />
                  })}


               <Footer/>

            </div>
         );
      } else {
         return(
           <AppLoader/>
         );
      }

   }
}

export default App;
