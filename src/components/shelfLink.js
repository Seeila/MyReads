import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ShelfLinks extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired
  };

  render() {
    const { shelves } = this.props;

    return (
      <div className="book-state-buttons">
        <nav>
          {shelves.map((shelf, index) => (
            <Link to={`/${shelf}`} className="shelf-button" key={shelf}>
              {shelf}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
}

export default ShelfLinks;
