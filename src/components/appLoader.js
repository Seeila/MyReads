import React, { Component } from 'react';


class AppLoader extends Component {
   render() {
      return (
        <div className="app-loader">
           <picture>
             <source
               media="(max-width:400px)"
               srcSet="./img/2x_loader_bg_phone.jpg 2x, ./img/loader_bg_phone.jpg 1x"
             />
             <source
               media="(min-width:401px and max-width:1024px)"
               srcSet="./img/2x_loader_bg_tablet.jpg 2x, ./img/loader_bg_tablet.jpg 1x"
             />
             <source
               media="(min-width:1025px)"
               srcSet="./img/2x_loader_bg_laptop.jpg 2x, ./img/loader_bg_laptop.jpg 1x"
             />
             <img src="./img/loader_bg_laptop.jpg" alt="Welcome on my Reads, the page is currently loading" />
           </picture>
           <h1>MyReads</h1>
        </div>
      )
   }
}


export default AppLoader
