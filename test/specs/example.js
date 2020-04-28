const { short } = require("../../lib/timeouts");
const { mobile, tablet, desktop } = require("../../lib/devices");

describe("First steps with WebdriverIO", () => {
  it("Loads example.com", () => {
    browser.url("http://www.example.com");
    browser.pause(short);

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

  it("Saves screenshot", () => {
    browser.saveScreenshot("your-name.png");
  });

  it("Changes browser viewport", () => {
    browser.setWindowSize(800, 600);
    browser.pause(short);
  });

  it("Sets mobile view", () => {
    browser.setWindowSize(mobile[0], mobile[1]);
    browser.pause(short);
  });

  it("Sets tablet view", () => {
    browser.setWindowSize(tablet[0], tablet[1]);
    browser.pause(short);
  });

  it("Sets desktop view", () => {
    browser.setWindowSize(desktop[0], desktop[1]);
    browser.pause(short);
  });
});
