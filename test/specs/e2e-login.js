const { short } = require('../../lib/timeouts');

describe('E2E Tests - Login / Logout', () => {
  it('Does not login with invalid credentials', () => {
    browser.url('http://zero.webappsecurity.com/index.html');
    const signInButton = $('#signin_button');
    signInButton.waitForExist();
    signInButton.click();
    const logInForm = $('#login_form');
    logInForm.waitForExist();
    const userLogin = $('#user_login');
    userLogin.setValue('invalid');
    const userPassword = $('#user_password');
    userPassword.setValue('invalid');
    browser.pause(short);
    const submit = $('input[type="submit"]');
    submit.click();
    const error = $('.alert-error');
    expect(error).toHaveText('Login and/or password are wrong.');
  });
});
