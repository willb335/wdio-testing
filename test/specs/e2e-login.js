const { short } = require('../../lib/timeouts');
const { formIsVisible } = require('../../page-objects/pages/logInPage');

describe('E2E Tests - Login / Logout', () => {
  it('Does not login with invalid credentials', () => {
    const signInButton = $('#signin_button');
    const logInForm = $('#login_form');
    const userLogin = $('#user_login');
    const userPassword = $('#user_password');
    const submit = $('input[type="submit"]');
    const navTabs = $('.nav-tabs');

    browser.url('http://zero.webappsecurity.com/index.html');
    signInButton.waitForExist();
    signInButton.click();
    // logInForm.waitForExist();
    formIsVisible();
    userLogin.setValue('invalid');
    userPassword.setValue('invalid');
    browser.pause(short);
    submit.click();
    const error = $('.alert-error');
    expect(error).toHaveText('Login and/or password are wrong.');
  });

  it('Does login with valid credentials', () => {
    const signInButton = $('#signin_button');
    const logInForm = $('#login_form');
    const userLogin = $('#user_login');
    const userPassword = $('#user_password');
    const submit = $('input[type="submit"]');
    const navTabs = $('.nav-tabs');

    browser.url('http://zero.webappsecurity.com/index.html');
    signInButton.waitForExist();
    signInButton.click();
    logInForm.waitForExist();
    userLogin.setValue('username');
    userPassword.setValue('password');
    browser.pause(short);
    submit.click();
    navTabs.waitForExist();
  });

  it('Logs out from app', () => {
    $('.icon-user').waitForExist();
    $('.icon-user').click();
    $('#logout_link').waitForExist();
    $('#logout_link').click();
    browser.pause(short);
    $('#pages-nav').waitForExist();
  });
});
