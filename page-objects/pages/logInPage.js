module.exports = {
  logInForm: $('#login_form'),
  userNameInput: $('#user_login'),
  passwordInput: $('#user_password'),
  submitButton: $('input[type="submit"]'),
  formIsVisible: () => this.logInForm.waitForExist(),
  fillForm: (username, password) => {
    this.userNameInput.setValue(username);
    this.passwordInput.setValue(password);
  },
  submitForm: () => {
    this.submitButton.click();
  },
};
