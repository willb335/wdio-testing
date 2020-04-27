describe("First steps with WebdriverIO", () => {
  it("Loads example.com", () => {
    browser.url("http://www.example.com");
    browser.pause(3000);

    expect(browser).toHaveUrl("http://www.example.com/");
    expect(browser).toHaveTitle("Example Domain");
  });

  // it("Loads Webdriver's website", () => {
  //   browser.url("https://webdriver.io");
  //   browser.pause(3000);
  // });
});
