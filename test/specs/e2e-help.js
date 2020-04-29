import App from '../../page-objects/App';
import LoginPage from '../../page-objects/pages/LoginPage';
import HelpPage from '../../page-objects/pages/HelpPage';
import Navbar from '../../page-objects/components/Navbar';

describe('E2E Testing - Help Section', () => {
  it('Logs into account', () => {
    App.openLoginPage();
    LoginPage.login('username', 'password');
    Navbar.insideNavbarIsVisible();
  });

  it('loads help content', () => {
    Navbar.clickSettings();
    Navbar.clickHelp();
    expect(HelpPage.title).toHaveText('How do I log into my account?');

    HelpPage.clickOnTransferFunds();
    expect(HelpPage.title).toHaveText('How do I transfer funds?');

    HelpPage.clickOnPayBills();
    expect(HelpPage.title).toHaveText('How do I pay bills?');
  });
});
