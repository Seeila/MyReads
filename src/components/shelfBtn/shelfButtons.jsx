import React, { Component } from "react";
import PropTypes from "prop-types";
import { ShelfButton, ShelfImage, ShelfNav, ChooseShelfButtons } from "./style";

class ShelfButtons extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showChooseShelf: false
      };
   }

   static propTypes = {
      book: PropTypes.object.isRequired,
      changeShelfOnClick: PropTypes.func.isRequired
   };

   shelfButtononClick = () => {
      this.state.showChooseShelf
         ? this.setState({ showChooseShelf: false })
         : this.setState({ showChooseShelf: true });
   };

   render() {
      const { book, changeShelfOnClick } = this.props;

      return (
         <React.Fragment>
            <ShelfNav {...this.state}>
               <ChooseShelfButtons
                  aria-label="none"
                  onClick={() => changeShelfOnClick(book, "none")}
                  key="noShelf"
                  {...this.props}
               >
                  <ShelfImage
                     src={require(`../../img/icons/none.svg`)}
                     alt="none"
                  />
               </ChooseShelfButtons>

               <ChooseShelfButtons
                  aria-label="Reading"
                  onClick={event =>
                     changeShelfOnClick(book, "currentlyReading")
                  }
                  key="currentlyReading"
                  {...this.props}
               >
                  <ShelfImage
                     src={require(`../../img/icons/currentlyReading.svg`)}
                     alt="Reading"
                  />
               </ChooseShelfButtons>

               <ChooseShelfButtons
                  aria-label="Whishlist"
                  onClick={event => changeShelfOnClick(book, "wantToRead")}
                  key="wantToRead"
                  {...this.props}
               >
                  <ShelfImage
                     src={require(`../../img/icons/wantToRead.svg`)}
                     alt="Reading"
                  />
               </ChooseShelfButtons>

               <ChooseShelfButtons
                  aria-label="Read"
                  onClick={event => changeShelfOnClick(book, "read")}
                  key="read"
                  {...this.props}
               >
                  <ShelfImage
                     src={require(`../../img/icons/read.svg`)}
                     alt="Reading"
                  />
               </ChooseShelfButtons>
            </ShelfNav>

            <ShelfButton
               aria-label={book.shelf}
               onClick={this.shelfButtononClick}
            >
               <ShelfImage
                  src={
                     book.shelf
                        ? require(`../../img/icons/${book.shelf}.svg`)
                        : require(`../../img/icons/none.svg`)
                  }
                  alt={book.shelf}
               />
            </ShelfButton>
         </React.Fragment>
      );
   }
}

export default ShelfButtons;
