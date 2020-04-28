describe("First steps with WebdriverIO", () => {
  it("Loads example.com", () => {
    browser.url("http://www.example.com");
    browser.pause(3000);

    expect(browser).toHaveUrl("http://www.example.com/");
    expect(browser).toHaveTitle("Example Domain");
  });

  it("Has a visible h1", () => {
    const h1 = $("h1");
    h1.waitForExist();

    expect(h1).toBeVisible();
  });

  it("Has a visible p", () => {
    const p = $("p");
    p.waitForExist();

    expect(p).toBeVisible();
  });

  it("Checks link value", () => {
    const link = $("a");
    link.waitForExist();

    expect(link).toHaveLink("https://www.iana.org/domains/example");
  });

  it("Gets element text", () => {
    const text = $("h1").getText();
    const element = $("h1");

    element.waitForExist();
    expect(element).toHaveText("Example Domain");
  });

  it("Asserts attribute", () => {
    browser.url("https://devexpress.github.io/testcafe/example/");
    const button = $("#submit-button");
    button.waitForExist();
    expect(button).toHaveAttrContaining("type", "submit");
  });

  it("Asserts value", () => {
    const button = $("#populate");
    button.waitForExist();
    expect(button).toHaveValue("Populate");
  });
});
