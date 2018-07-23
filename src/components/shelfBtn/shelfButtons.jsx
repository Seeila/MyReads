import React, { Component } from "react";
import { ShelfButton, ShelfImage, ShelfNav, ChooseShelfButtons } from "./style";

class ShelfButtons extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showChooseShelf: false
      };
   }

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
         bookIndex
      } = this.props;

      return (
         <React.Fragment>
            <ShelfNav {...this.state}>
               {shelves.map(
                  (shelf, index) =>
                     shelf !== "all" && (
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
                     )
               )}
            </ShelfNav>

            <ShelfButton
               aria-label={book.shelf}
               onClick={this.shelfButtononClick}
            >
               <ShelfImage
                  src={require(`../../img/icons/${book.shelf}.svg`)}
                  alt={book.shelf}
               />
            </ShelfButton>
         </React.Fragment>
      );
   }
}

export default ShelfButtons;
