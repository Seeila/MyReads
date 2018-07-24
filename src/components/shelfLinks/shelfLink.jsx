import React, { Component } from "react";
import { StyledLink, Nav } from "./style";

class ShelfLinks extends Component {
   render() {
      return (
         <Nav>
            {/*not mapped from shelf because order depends of apparition in data array*/}
            <StyledLink exact to="/" activeClassName="active" key="all">
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
