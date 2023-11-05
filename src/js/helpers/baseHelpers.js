import MobileChecker from "./mobileChecker.js";
import { callbacks } from "browser-sync/dist/logger.js";

class BaseHelpers {
  static html = document.documentElement;
  static header = document.querySelector(".main-header");

  // Checking if the browser supports WebP. Required for the correct display of WebP images from CSS
  static checkWebpSupport() {
    const testWebp = (callback) => {
      const webP = new Image();

      webP.onload = webP.onerror = () => callback(webP.height === 2);
      webP.src =
        "data:image/webp;base64, UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    };
    // Adding the 'webp' or 'no-webp' class to the <html>
    testWebp((support) => {
      const className = support ? "webp" : "no-webp";
      this.html.classList.add(className);

      console.log(support ? "webp is supported" : "webp is not supported");
    });
  }

  // Adding the 'touch' class if the browser is on a mobile device
  static addTouchClass() {
    if (MobileChecker.isAny) {
      this.html.classList.add("touch");
    }
  }
}

export default BaseHelpers;