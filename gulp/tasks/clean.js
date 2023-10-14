import { deleteAsync } from "del";
import { filePaths} from "../config/paths.js";

export const clean = () => deleteAsync(filePaths.clean)