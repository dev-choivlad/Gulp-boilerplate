// Checks which browser is used on a mobile device

class MobileChecker {
  static userAgent = navigator.userAgent;

  static get isAndroid() {
    return Boolean(this.userAgent.match(/Android/i));
  }

  static get isAppleOS() {
    return Boolean(this.userAgent.match(/iPhone|iPad|iPod/i));
  }

  static get isBlackberry() {
    return Boolean(this.userAgent.match(/Blackberry/i));
  }

  static get isOpera() {
    return Boolean(this.userAgent.match(/Opera Mini/i));
  }

  static get isWindows() {
    return Boolean(this.userAgent.match(/IEMobile/i));
  }

  static get Any() {
    return(
      this.isAndroid ||
      this.isAppleOS ||
      this.isBlackberry ||
      this.isOpera ||
      this.isWindows
    );
  }
}

export default MobileChecker;