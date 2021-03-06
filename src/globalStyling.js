import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: 'Lobster';
    src: url('https://fonts.googleapis.com/css?family=Lobster');
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css?family=Montserrat:400,600');
  }

  :root {
     --orange: #FF8D47;
     --yellow: #FFDA2E;
     --grey: #53657D;
     --lobster: 'Lobster', sans-serif;
     --montserrat: 'Montserrat', sans-serif;
 }



  /************
  *************
      RESET
  *************
  ************/

  html, body, div, span, applet, object, iframe,
 h1, h2, h3, h4, h5, h6, p, blockquote, pre,
 a, abbr, acronym, address, big, cite, code,
 del, dfn, em, img, ins, kbd, q, s, samp,
 small, strike, strong, sub, sup, tt, var,
 b, u, i, center,
 dl, dt, dd, ol, ul, li,
 fieldset, form, label, legend,
 table, caption, tbody, tfoot, thead, tr, th, td,
 article, aside, canvas, details, embed,
 figure, figcaption, footer, header, hgroup,
 menu, nav, output, ruby, section, summary,
 time, mark, audio, video {
 	margin: 0;
 	padding: 0;
   box-sizing:border-box;
 	border: 0;
 	font-size: 100%;
 	font: inherit;
 	vertical-align: baseline;
 }
 /* HTML5 display-role reset for older browsers */
 article, aside, details, figcaption, figure,
 footer, header, hgroup, menu, nav, section {
 	display: block;
 }
 body {
 	line-height: 1.3;
 }
 ol, ul {
 	list-style: none;
 }
 blockquote, q {
 	quotes: none;
 }
 blockquote:before, blockquote:after,
 q:before, q:after {
 	content: '';
 	content: none;
 }
 table {
 	border-collapse: collapse;
 	border-spacing: 0;
 }

 a{
    text-decoration:none;
    color:inherit;
}

body {
   font-family: var(--montserrat);
   color: var(--grey);
}

main {
   min-height: calc(100vh - 111px);
}
`;
