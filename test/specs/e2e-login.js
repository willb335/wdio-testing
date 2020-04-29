import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import { short } from '../../lib/timeouts';
import Navbar from '../../page-objects/components/Navbar';

describe('E2E Tests - Login / Logout', () => {
  it('Does not login with invalid credentials', () => {
    App.openHomepage();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    LoginPage.fillForm('invalid', 'invalid');
    LoginPage.submitForm();

    const message = LoginPage.error;
    expect(message).toHaveText('Login and/or password are wrong.');
  });

  it('Does login with valid credentials', () => {
    App.openHomepage();
    Navbar.clickSignIn();
    LoginPage.formIsVisible();
    LoginPage.fillForm('username', 'password');
    LoginPage.submitForm();
    Navbar.insideNavbarIsVisible();
  });

  it('Logs out from app', () => {
    App.logout();
    Navbar.signInButtonIsVisible();
  });
});
