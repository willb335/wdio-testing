import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import FiltersPage from '../../page-objects/pages/FiltersPage';
import Navbar from '../../page-objects/components/Navbar';
import InsideNavbar from '../../page-objects/components/InsideNavbar';

describe('E2E Tests - Transactions Filter', () => {
  it('Logs into application', () => {
    App.openLoginPage();
    LoginPage.login('username', 'password');
    Navbar.insideNavbarIsVisible();
  });

  it('returns no results when transaction dates are not entered', () => {
    // $('#account_activity_tab').click();
    // $('#tabs > ul > li:nth-child(2)').waitForExist();
    // $('#tabs > ul > li:nth-child(2)').click();
    InsideNavbar.clickAccountActivityTab();
    InsideNavbar.clickFiltersLink();
    FiltersPage.fillDescription('Test');
    FiltersPage.submitFilter();
    FiltersPage.resultsTableIsVisible();
    // $('#aa_description').waitForExist();
    // $('#aa_description').setValue('Test');
    // $("button[type='submit']").click();
    // $('#filtered_transactions_for_account').waitForExist();
    // const message = $('.well');
    expect(FiltersPage.message).toHaveText('No results.');
  });
});
