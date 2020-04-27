describe("First steps with WebdriverIO", () => {
  it("Loads example.com", () => {
    browser.url("http://www.example.com");
    browser.pause(3000);

    expect(browser).toHaveUrl("http://www.example.com/");
    expect(browser).toHaveTitle("Example Domain");
  });

  it("Has a visible h1", () => {
    const h1 = $("h1");

    expect(h1).toBeVisible();
  });

  it("Has a visible p", () => {
    const p = $("p");

    expect(p).toBeVisible();
  });

  it("Checks link value", () => {
    const link = $("a");

    expect(link).toHaveLink("https://www.iana.org/domains/example");
  });
});
