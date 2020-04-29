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
    // $('.icon-cog').click();
    Navbar.clickSettings();
    // $('#help_link').waitForExist();
    // $('#help_link').click();
    Navbar.clickHelp();
    // const title = $('.span8 > h3');
    expect(HelpPage.title).toHaveText('How do I log into my account?');

    // $('*=transfer funds').click();
    HelpPage.clickOnTransferFunds();
    expect(HelpPage.title).toHaveText('How do I transfer funds?');

    // $('*=pay bills').click();
    HelpPage.clickOnPayBills();
    expect(HelpPage.title).toHaveText('How do I pay bills?');
  });
});
