import React, { Component } from "react";
import {Wrapper, Image, Logo } from "./loaderStyle.js";

import mLoader from'../../img/loader_bg_phone.jpg';
import mLoaderRetina from'../../img/2x_loader_bg_phone.jpg';
import tLoader from'../../img/loader_bg_tablet.jpg';
import tLoaderRetina from'../../img/2x_loader_bg_tablet.jpg';
import lLoader from'../../img/loader_bg_laptop.jpg';
import lLoaderRetina from'../../img/2x_loader_bg_laptop.jpg';

class Loader extends Component {
  render() {
    return (
      <Wrapper>
        <picture>
            <source media="(min-width: 1025px)" srcSet={`${lLoader}, ${lLoaderRetina} 2x`} />
            <source media="(min-width: 401px)" srcSet={`${tLoader}, ${tLoaderRetina} 2x`} />
            <Image srcSet={`${mLoader}, ${mLoaderRetina} 2x`} alt="Loading..." />
        </picture>
        <Logo>MyReads</Logo>
      </Wrapper>
    );
  }
}

export default Loader;
