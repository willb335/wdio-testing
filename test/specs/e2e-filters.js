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
    InsideNavbar.clickAccountActivityTab();
    InsideNavbar.clickFiltersLink();
    FiltersPage.fillDescription('Test');
    FiltersPage.submitFilter();
    FiltersPage.resultsTableIsVisible();

    expect(FiltersPage.message).toHaveText('No results.');
  });
});
