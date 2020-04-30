import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import Navbar from '../../page-objects/components/Navbar';
import InsideNavbar from '../../page-objects/components/InsideNavbar';

describe('E2E Tests - Currency Exchange', () => {
  it('Should log into application', () => {
    App.openLoginPage();
    LoginPage.login('username', 'password');
    Navbar.insideNavbarIsVisible();
  });

  it('Should make currency exchange', () => {
    // $('#pay_bills_tab').waitForExist();
    // $('#pay_bills_tab').click();
    InsideNavbar.clickPayBillsTab();
    // $('#tabs > ul > li:nth-child(3) > a').waitForExist();
    // $('#tabs > ul > li:nth-child(3) > a').click();
    InsideNavbar.clickPurchaseForeignCurrencyTab();
    // const currencySelect = $('#pc_currency');
    // currencySelect.waitForExist();
    // currencySelect.selectByAttribute('value', 'GBP');
    InsideNavbar.selectCurrency('GBP');
    // $('#pc_amount').setValue('500');
    InsideNavbar.inputCurrencyAmount('500');
    // $('#pc_inDollars_true').click();
    InsideNavbar.clickDenominateInDollars();
    // $('#purchase_cash').click();
    InsideNavbar.clickPurchaseCash('#purchase_cash');
    // const message = $('#alert_content');
    expect(InsideNavbar.alertContent).toHaveText(
      'Foreign currency cash was successfully purchased.'
    );
  });
});
