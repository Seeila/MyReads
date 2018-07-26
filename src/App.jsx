import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { MainStyled } from "./AppStyle";

import "./globalStyling";

import Loader from "./components/appLoader/appLoader";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Footer from "./components/footer/footer";
import Shelf from "./components/shelf/shelf";
import * as BooksAPI from "./data/BooksAPI";

class App extends Component {
   constructor(props, match) {
      super(props, match);

      this.state = {
         data: [],
         showingBooks: []
      };
   }

   componentDidMount() {
      BooksAPI.getAll().then(res => {
         this.setState({ data: res });
      });
   }

   changeShelfOnClick = (book, shelf) => {
      BooksAPI.update(book, shelf);
      BooksAPI.getAll()
         .then(books => {
            this.setState({ data: books });
         })
         .then(books => this.updateSchelves(shelf));
   };

   updateSearchResults = query => {
      let returnedBooks;
      BooksAPI.search(query).then(results => {
         this.setState({ showingBooks: results });
         this.updateSchelves();
      });
   };

   updateSchelves = shelf => {
      let newState = [...this.state.showingBooks];
      newState.map((book, index) => {
         this.state.data.map(el => {
            if (book.id === el.id) {
               console.log(shelf);
               book.shelf = shelf === "none" ? undefined : el.shelf;
            } else {
               book.shelf = book.shelf;
            }
         });
      });
      this.setState(state => ({ showingBooks: newState }));
   };

   render() {
      const { data, showingBooks } = this.state;

      if (!data.length) {
         return <Loader />;
      }

      const shelves = ["currentlyReading", "wantToRead", "read"].filter(
         el => el !== undefined
      );

      const shelfNames = shelves.map(shelf => {
         if (shelf === "currentlyReading") return "reading";
         if (shelf === "wantToRead") return "whishlist";
         return shelf;
      });

      return (
         <React.Fragment>
            <Header />

            <MainStyled>
               <Switch>
                  <Route
                     exact
                     path="/"
                     key="all"
                     render={match => (
                        <Shelf
                           books={data}
                           match={match.match}
                           history={match.history}
                           shelves={shelves}
                           shelfNames={shelfNames}
                           changeShelfOnClick={this.changeShelfOnClick}
                        />
                     )}
                  />

                  {shelves.map((shelf, index) => (
                     <Route
                        path={`/${shelf}`}
                        key={shelf}
                        render={match => (
                           <Shelf
                              books={data}
                              match={match.match}
                              history={match.history}
                              shelves={shelves}
                              shelfNames={shelfNames}
                              index={index}
                              changeShelfOnClick={this.changeShelfOnClick}
                           />
                        )}
                     />
                  ))}
                  <Route
                     path="/search"
                     render={match => (
                        <Search
                           history={match.history}
                           books={data}
                           match={match.match}
                           shelves={shelves}
                           shelfNames={shelfNames}
                           changeShelfOnClick={this.changeShelfOnClick}
                           updateSearchResults={this.updateSearchResults}
                           showingBooks={showingBooks}
                        />
                     )}
                  />
               </Switch>
            </MainStyled>
            <Footer />
         </React.Fragment>
      );
   }
}

export default App;
