describe('E2E Testing - Help Section', () => {
  it('Logs into account', () => {
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
