import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import Navbar from '../../page-objects/components/Navbar';
import InsideNavbar from '../../page-objects/components/InsideNavbar';

describe('E2E Tests - Pay', () => {
  it('Should log into application', () => {
    App.openLoginPage();
    LoginPage.login('username', 'password');
    Navbar.insideNavbarIsVisible();
  });

  it('Should make payment', () => {
    InsideNavbar.clickPayBillsTab();
    InsideNavbar.selectPayee('apple');
    InsideNavbar.selectAccount('Loan');
    InsideNavbar.inputAmount('500');
    InsideNavbar.inputDate('2020-03-31');
    InsideNavbar.inputDescription('Test');
    InsideNavbar.clickPaymentButton();
    // $('#pay_bills_tab').click();
    // const selectPayee = $('#sp_payee');
    // selectPayee.waitForExist();
    // selectPayee.selectByAttribute('value', 'apple');

    // const selectAccount = $('#sp_account');
    // selectAccount.waitForExist();
    // selectAccount.selectByVisibleText('Loan');
    // $('#sp_amount').setValue('500');
    // $('#sp_date').setValue('2020-03-31');
    // $('#sp_description').setValue('Test');
    // $('#pay_saved_payees').click();
    // const message = $('#alert_content');
    expect(InsideNavbar.alertContent).toHaveText(
      'The payment was successfully submitted.'
    );
  });
});
