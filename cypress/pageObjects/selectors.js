class Selectors {
  // Selectors on homePage
  get logo() {
    return ".logo";
  }
  get loginButton() {
    return "#svg-replaced-0";
  }
  get caseStudies() {
    return "#menu-case-studies";
  }
  get services() {
    return ".menu-services";
  }
  get expertise() {
    return ".menu-item.menu-item-has-children.menu-expertise";
  }
  get resources() {
    return ".menu-item.menu-item-has-children.menu-resources";
  }
  get careers() {
    return ".menu-careers";
  }
  get about() {
    return ".menu-about";
  }
}
export default Selectors;
