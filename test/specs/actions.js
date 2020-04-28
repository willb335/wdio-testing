const { short } = require('../../lib/timeouts');

describe('Browser Actions', () => {
  it('Inputs data', () => {
    browser.url('https://devexpress.github.io/testcafe/example/');
    const input = $('#developer-name');
    input.waitForExist();
    input.setValue('Will');
    browser.pause(short);
    input.clearValue();
    browser.pause(short);
    input.addValue('Will');
    browser.pause(short);
  });
});
