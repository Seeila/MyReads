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
      shelves: PropTypes.array.isRequired,
      shelfNames: PropTypes.array.isRequired,
      bookIndex: PropTypes.number,
      changeShelfOnClick: PropTypes.func.isRequired,
      removeFromShelfOnClick: PropTypes.func.isRequired
   };

   shelfButtononClick = () => {
      this.state.showChooseShelf
         ? this.setState({ showChooseShelf: false })
         : this.setState({ showChooseShelf: true });
   };

   render() {
      const {
         book,
         shelves,
         shelfNames,
         changeShelfOnClick,
         removeFromShelfOnClick,
         bookIndex
      } = this.props;

      return (
         <React.Fragment>
            <ShelfNav {...this.state}>
               <ChooseShelfButtons
                  aria-label="none"
                  onClick={() => removeFromShelfOnClick(bookIndex)}
                  key="noShelf"
                  {...this.props}
               >
                  <ShelfImage
                     src={require(`../../img/icons/none.svg`)}
                     alt="none"
                  />
               </ChooseShelfButtons>
               {shelves.map((shelf, index) => (
                  <ChooseShelfButtons
                     shelf={shelfNames[index]}
                     aria-label={shelfNames[index]}
                     onClick={() => changeShelfOnClick(shelf, bookIndex)}
                     key={shelfNames[index]}
                     {...this.props}
                  >
                     <ShelfImage
                        src={require(`../../img/icons/${shelf}.svg`)}
                        alt={book.shelf}
                     />
                  </ChooseShelfButtons>
               ))}
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
