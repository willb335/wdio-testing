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
  get error() {
    return $('.alert-error');
  }

  formIsVisible() {
    return this.loginForm.waitForExist();
  }

  submitForm() {
    return this.submitButton.click();
  }

  fillForm(username, password) {
    this.userNameInput.setValue(username);
    this.passwordInput.setValue(password);
  }

  login(username, password) {
    this.loginForm.waitForExist();
    this.userNameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.submitButton.click();
  }
}

export default new LoginPage();
