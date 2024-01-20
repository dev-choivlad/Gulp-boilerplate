# Gulp-boilerplate
Gulp boilerplate + Webpack + Babel

## Use the following commands to start:

- To install all dependencies: `$ npm install`;
- To run the Gulp builder: `$ npm run dev`;
- To build the project in `"production"` mode: `$ npm run build`;

## What does Gulp do?
- Minifies HTML in production mode;
- Removes comments from HTML in production mode;
- Compiles SCSS files, adds vendor prefixes;
- Removes comments from SCSS files;
- In production mode, minifies CSS and creates an uncompressed copy;
- Converts fonts to .ttf, and from .ttf to woff/woff2;
- creates a file for font inclusion. This file is generated at the following path: src/scss/fonts/fonts.scss;
### Here is an example of fonts.scss
```scss
@font-face {
	font-family: MontserratAlternates;
	font-display: swap;
	src: url("../fonts/MontserratAlternates-Medium.woff2") format("woff2"), url("../fonts/MontserratAlternates-Medium.woff") format("woff");
	font-weight: 500;
	font-style: normal;
}
```