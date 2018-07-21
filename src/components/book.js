import React, { Component } from "react";

class Shelf extends Component {
  render() {
    const { books, match } = this.props;
    const book = books.find(el => el.id === match.params.id);

    console.log(book);

    return (
      <div>
        <h3>{book.title}</h3>
      </div>
    );
  }
}

export default Shelf;
