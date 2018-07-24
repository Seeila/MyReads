import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StylingHeader, Logo, SearchIcon } from "./style";
import Search from "../../img/icons/search.svg";

class Header extends Component {

   render() {
      return (
         <StylingHeader>
            <Link to="/">
               <Logo>MyReads</Logo>
            </Link>
            {//if not on search page show search icon
            this.props.location !== "/search" && (
               <Link to="/search">
                  <SearchIcon src={Search} alt="search" />
               </Link>
            )}
         </StylingHeader>
      );
   }
}

export default Header;
