import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import { short } from '../../lib/timeouts';
import Navbar from '../../page-objects/components/Navbar';

describe('E2E Tests - Login / Logout', () => {
  it('Does not login with invalid credentials', () => {
    const signInButton = $('#signin_button');
    const navTabs = $('.nav-tabs');

    // browser.url('http://zero.webappsecurity.com/index.html');
    App.openHomepage();
    // signInButton.waitForExist();
    // signInButton.click();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    LoginPage.fillForm('invalid', 'invalid');
    LoginPage.submitForm();
    browser.pause(short);

    const error = $('.alert-error');
    expect(error).toHaveText('Login and/or password are wrong.');
  });

  it('Does login with valid credentials', () => {
    const signInButton = $('#signin_button');
    const navTabs = $('.nav-tabs');

    // browser.url('http://zero.webappsecurity.com/index.html');
    App.openHomepage();
    // signInButton.waitForExist();
    // signInButton.click();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    LoginPage.fillForm('username', 'password');
    LoginPage.submitForm();
    browser.pause(short);
    navTabs.waitForExist();
  });

  it('Logs out from app', () => {
    $('.icon-user').waitForExist();
    $('.icon-user').click();
    $('#logout_link').waitForExist();
    $('#logout_link').click();
    // browser.pause(short);
    $('#pages-nav').waitForExist();
  });
});
