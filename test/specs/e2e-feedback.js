import App from '../../page-objects/App';
import FeedbackPage from '../../page-objects/pages/FeedbackPage';

describe('E2E - Feedback', () => {
  it('Should load feedback form', () => {
    App.openFeedbackPage();
    FeedbackPage.formIsVisible();
  });

  it('Should submit feedback form', () => {
    FeedbackPage.fillForm('Will', 'test@test.com', 'Subject', 'Message');
    FeedbackPage.submitForm();
    expect(browser).toHaveUrl(
      'http://zero.webappsecurity.com/sendFeedback.html'
    );
  });
});
