import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import Navbar from '../../page-objects/components/Navbar';

describe('E2E Testing - Help Section', () => {
  it('Logs into account', () => {
    App.openLoginPage();
    LoginPage.formIsVisible();
    LoginPage.fillForm('username', 'password');
    LoginPage.submitForm();
    Navbar.insideNavbarIsVisible();
  });

  it('loads help content', () => {
    $('.icon-cog').click();
    $('#help_link').waitForExist();
    $('#help_link').click();
    const title = $('.span8 > h3');
    expect(title).toHaveText('How do I log into my account?');

    $('*=transfer funds').click();
    expect(title).toHaveText('How do I transfer funds?');

    $('*=pay bills').click();
    expect(title).toHaveText('How do I pay bills?');
  });
});
