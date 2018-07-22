import React, { Component } from "react";

class Shelf extends Component {
  render() {
    const { books, match } = this.props;
    const book = books.find(el => el.id === match.params.id);

    console.log(book);

    return (
      <React.Fragment>
        <h3>{book.title}</h3>
      </React.Fragment>
    );
  }
}

export default Shelf;
