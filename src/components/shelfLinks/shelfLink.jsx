import React, { Component } from "react";
import { StyledLink, Nav } from "./style";
import PropTypes from "prop-types";

class ShelfLinks extends Component {
   render() {
      return (
         <Nav>
            <StyledLink to="/all" activeClassName="active" key="all">
               All
            </StyledLink>
            <StyledLink
               to="/currentlyReading"
               activeClassName="active"
               key="currentlyReading"
            >
               reading
            </StyledLink>
            <StyledLink
               to="/wantToRead"
               activeClassName="active"
               key="wantToRead"
            >
               whishlist
            </StyledLink>
            <StyledLink to="/read" activeClassName="active" key="read">
               read
            </StyledLink>
         </Nav>
      );
   }
}

export default ShelfLinks;
