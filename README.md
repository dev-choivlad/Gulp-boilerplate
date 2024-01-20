# 🚀 Gulp-boilerplate
Gulp boilerplate + Webpack + Babel

## 🫡 Use the following commands to start:

- To install all dependencies: `$ npm install`;
- To run the Gulp builder: `$ npm run dev`;
- To build the project in `"production"` mode: `$ npm run build`;

## 🤟 What does Gulp do?
- Minifies HTML in `prod mode`;
- Removes comments from HTML in `prod mode`;
- Compiles SCSS files, adds vendor prefixes;
- Removes comments from SCSS files;
- In `prod mode`, minifies CSS and creates an uncompressed copy;
- Converts fonts to `.ttf`, and from `.ttf` to `woff/woff2`;
- Creates a file for font inclusion. This file is generated at the following path: `src/scss/fonts/fonts.scss`;
#### Here is an example of fonts.scss
```scss
@font-face {
	font-family: OpenSans;
	font-display: swap;
	src: url("../fonts/OpenSans-Bold.woff2") format("woff2"), url("../fonts/OpenSans-Bold.woff") format("woff");
	font-weight: 700;
	font-style: normal;
}
```
> Be aware, if the `src/scss/fonts` folder already contains a `fonts.scss` file, then when adding new fonts, you **need to delete** the old `fonts.scss` file. Upon running the build process, Gulp will convert all the new fonts and generate a new `fonts.scss` file.

#### 🍩 What else does the build process do?
- Compresses images and additionally converts them to the `.webp` format, and includes them if the browser supports this format.
- Copies the `/static` folder and its contents into the final build. This means that any files placed in this folder will be added to the final build.
- Creates SVG sprites with a separate command `npm run svg`.
- Clears the final project folder before each build to avoid including unnecessary files.
- With a separate command `npm run zip` archives the final folder with **the project name** for the client.
- In `dev mode`, Gulp starts a server with automatic reloading whenever files in the project are modified.
- With a separate command `npm run deployFTP` uploads the final project to hosting. The settings for sending to a hosting are specified in the file `gulp/config/ftp.js`.
- With a separate command `npm run deploy` deploys the `/dist` folder to a separate branch on GitHub to showcase the project on GitHub Pages. To achieve this, specify the link to your gh-pages in the **homepage** field of `package.json`.
```json
"homepage": "https://{UserName}.github.io/{NameRepo}",
```
## 🦾 What does Webpack do?
- Processes JavaScript files;
- Supports modular script inclusion using `import/export`;
- Using `babel`, it  allows to write code in your favorite **`ES6+`**;
- Compresses JS files and deletes comments in `prod mode`;