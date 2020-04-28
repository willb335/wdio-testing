const { short } = require('../../lib/timeouts');

describe('Browser Actions', () => {
  // it('Inputs data', () => {
  //   browser.url('https://devexpress.github.io/testcafe/example/');
  //   const input = $('#developer-name');
  //   input.waitForExist();
  //   input.setValue('Will');
  //   browser.pause(short);
  //   input.clearValue();
  //   browser.pause(short);
  //   input.addValue('Will');
  //   browser.pause(short);
  // });
  //
  // it('Clicks populate button', () => {
  //   const populateButton = $('#populate');
  //   populateButton.waitForExist();
  //   populateButton.click();
  // });

  // it('Clicks checkbox and radio button', () => {
  //   browser.url('https://devexpress.github.io/testcafe/example/');
  //   const radio = $('#linux');
  //   radio.waitForExist();
  //   radio.click();
  //   radio.pause(short);
  //
  //   const checkbox = $('#remote-testing');
  //   checkbox.waitForExist();
  //   checkbox.click();
  //   browser.pause(short);
  // });

  it('Selects from select box', () => {
    browser.url('https://devexpress.github.io/testcafe/example/');
    const select = $('#preferred-interface');
    select.waitForExist();
    select.selectByVisibleText('JavaScript API');
    browser.pause(short);
  });
});
