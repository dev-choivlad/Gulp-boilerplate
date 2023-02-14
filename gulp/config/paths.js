import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`;
const srcFolder = `./src`;

const paths = {
	build: {},
	src: {},
	watch: {},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}