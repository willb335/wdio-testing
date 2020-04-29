class LoginPage {
  constructor() {}

  get loginForm() {
    return $('#login_form');
  }
  get userNameInput() {
    return $('#user_login');
  }
  get passwordInput() {
    return $('#user_password');
  }
  get submitButton() {
    return $('input[type="submit"]');
  }

  formIsVisible() {
    return this.logInForm.waitForExist();
  }

  submitForm() {
    return this.submitButton.click();
  }
}

export default new LoginPage();
