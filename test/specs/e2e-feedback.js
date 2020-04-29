const { openHomepage } = require('../../page-objects/App');

describe('E2E - Feedback', () => {
  it('Should load feedback form', () => {
    openHomepage();
    $('#feedback').waitForExist();
    $('#feedback').click();
    $('form').waitForExist();
  });

  it('Should submit feedback form', () => {
    $('#name').click();
    $('#name').setValue('Name');
    $('#email').setValue('test@test.com');
    $('#subject').setValue('Subjects');
    $('#comment').setValue('Just a message!');
    $('input[type="submit"]').click();
    expect(browser).toHaveUrl(
      'http://zero.webappsecurity.com/sendFeedback.html'
    );
  });
});
