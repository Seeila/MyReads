import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {StyledLink, Nav} from "./style";
import PropTypes from "prop-types";

class ShelfLinks extends Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired
  };

  render() {
    const { shelves, shelfNames } = this.props;

    return (
     <Nav>
       {shelves.map((shelf, index) => (
         <StyledLink to={`/${shelf}`} activeClassName="active" key={shelf}>
           {shelfNames[index]}
         </StyledLink>
       ))}
     </Nav>
    );
  }
}

export default ShelfLinks;
