describe('E2E Tests - Transactions Filter', () => {
  it('Logs into application', () => {
    const signInButton = $('#signin_button');
    const logInForm = $('#login_form');
    const userLogin = $('#user_login');
    const userPassword = $('#user_password');
    const submit = $('input[type="submit"]');
    const navTabs = $('.nav-tabs');

    browser.url('http://zero.webappsecurity.com/index.html');
    signInButton.waitForExist();
    signInButton.click();
    logInForm.waitForExist();
    userLogin.setValue('username');
    userPassword.setValue('password');
    // browser.pause(short);
    submit.click();
    navTabs.waitForExist();
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
