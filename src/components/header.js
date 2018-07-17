import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
   render() {
      return (
         <header>
           <Link to="/" className="app-logo"><h1>MyReads</h1></Link>
           {
             //if not on search page show search icon
             this.props.location !== "/search" &&  <Link to="/search" className="app-search">Search</Link>
           }

         </header>
      )
   }
}


export default Header
