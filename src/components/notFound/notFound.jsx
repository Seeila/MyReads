import React, { Component } from "react";
import { Paragraph } from "./style";

class NotFound extends Component {
   render() {
      return (
         <Paragraph>
            You currently have no books in this shelf or library
         </Paragraph>
      );
   }
}

export default NotFound;
