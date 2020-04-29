import Base from '../Base';

class Navbar extends Base {
  get signInButton() {
    return $('#signin_button');
  }
  get insideNavbar() {
    return $('.nav-tabs');
  }
  get settingsButton() {
    return $('.icon-cog');
  }
  get helpButton() {
    return $('#help_link');
  }

  signInButtonIsVisible() {
    this.signInButton.waitForExist();
  }

  clickSignIn() {
    this.signInButton.waitForExist();
    this.signInButton.click();
  }
  insideNavbarIsVisible() {
    this.insideNavbar.waitForExist();
  }
  clickSettings() {
    this.settingsButton.waitForExist();
    this.settingsButton.click();
  }
  clickHelp() {
    this.helpButton.waitForExist();
    this.helpButton.click();
  }
}

export default new Navbar();
