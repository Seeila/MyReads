import React, { Component } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import ShelfLinks from "./components/shelfLink";
import Footer from "./components/footer";
import Shelf from "./components/shelf";
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

  render() {
    const { data } = this.state;

    if (!data.length) {
      return <p>loading</p>;
    }

    const shelves = ["all", ...new Set(data.map(book => book.shelf))];

    return (
      <div className="App">
        <Header />

        <ShelfLinks data={data} shelves={shelves} />

        <main>
          <Route
            exact
            path="/"
            render={({ match }) => <Redirect from="/" to="all" />}
          />

          {shelves.map(shelf => (
            <Route
              path={`/${shelf}`}
              key={shelf}
              render={({ match }) => (
                <section>
                  <h2>{shelf}</h2>
                  <Shelf books={data} match={match} />
                </section>
              )}
            />
          ))}

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
