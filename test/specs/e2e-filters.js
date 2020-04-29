import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import Navbar from '../../page-objects/components/Navbar';

describe('E2E Tests - Transactions Filter', () => {
  it('Logs into application', () => {
    App.openLoginPage();
    LoginPage.formIsVisible();
    LoginPage.fillForm('username', 'password');
    LoginPage.submitForm();
    Navbar.insideNavbarIsVisible();
  });

  it('returns no results when transaction dates are not entered', () => {
    $('#account_activity_tab').click();
    $('#tabs > ul > li:nth-child(2)').waitForExist();
    $('#tabs > ul > li:nth-child(2)').click();
    $('#aa_description').waitForExist();
    $('#aa_description').setValue('Test');
    $("button[type='submit']").click();
    $('#filtered_transactions_for_account').waitForExist();
    const message = $('.well');
    expect(message).toHaveText('No results.');
  });
});
