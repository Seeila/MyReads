import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {ShelfTitle} from "./AppStyle";

import './globalStyling';

import Loader from "./components/appLoader/appLoader";
import Header from "./components/header/header";
import ShelfLinks from "./components/shelfLinks/shelfLink";
import Footer from "./components/footer/footer";
import Shelf from "./components/shelf/shelf";
import * as BooksAPI from "./data/BooksAPI";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({ data }));
  }

  changeShelfOnClick = (shelf, index) => {

     let data = [...this.state.data];
     let shelfName;
     shelf === "all" ? shelfName = '' : shelfName = shelf;
     data[index]['shelf'] = shelfName;
     this.setState({data});
  }


  render() {
    const { data } = this.state;

    if (!data.length) {
      return <Loader/>;
    }

    const shelves = ["all", ...new Set(data.map(book => book.shelf))];

    const shelfNames =  shelves.map(shelf => {
        if(shelf === "currentlyReading") return 'reading';
        if(shelf === "wantToRead") return 'whishlist';
        return shelf;
     });

    return (
      <React.Fragment>
        <Header />

        <main>
          <Route
            exact
            path="/"
            render={({ match }) => <Redirect from="/" to="all" />}
          />

       {shelves.map((shelf, index) => (
            <Route
              path={`/${shelf}`}
              key={shelf}
              render={({ match }) => (
                <React.Fragment>
                  <ShelfTitle>
                     {shelfNames[index] === "all" ? "Your books" : shelfNames[index]}
                  </ShelfTitle>

                  <ShelfLinks/>
                  
                  <Shelf books={data} match={match} shelves={shelves} shelfNames={shelfNames} changeShelfOnClick={this.changeShelfOnClick}/>
                </React.Fragment>
              )}
            />
          ))}

        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
