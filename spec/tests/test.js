require('chromedriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000
const DocPage = require('../../src/app/business/pages/documentationPage')
const DriverHolder = require('../support/browserDriverHolder/broweserDriverHolder')
const dh = new DriverHolder;
const PageFactory = require('../../src/app/business/pages/pageFactory');

describe("A suite is just a function", function () {
  let driver = null;
  let pf = null;

  beforeAll(async function () {
    driver = await dh.getDriver();
    pf = new PageFactory(driver);
    await driver.manage().window().maximize();
  });

  beforeEach(async function () {
    await driver.manage().window().maximize();
  });

  afterEach(async function () {
    await dh.clear();
  });

  afterAll(async function () {
    await driver.quit();
  });



  it("and so is a spec", async function () {
    let docPage = pf.getPage('documentation')
    await docPage.Browse('webdriver')
    await docPage.waitTitle();
    let text = await docPage.getText('mainTitle');
    expect(text).toBe('WebDriver')
    await docPage.selectHeaderItem(2);
    await docPage.waitTitle();
    text = await docPage.getText('mainTitle')
    expect(text).toBe('The Selenium Browser Automation Project')
  });

  it("and so is a spec2", async function () {
    let docPage = pf.getPage('documentation')
    await docPage.Browse('webdriver')
    await docPage.waitTitle();
    let text = await docPage.getText('mainTitle');
    expect(text).toBe('WebDriver')
    await docPage.selectHeaderItem(2);
    await docPage.waitTitle();
    text = await docPage.getText('mainTitle')
    expect(text).toBe('The Selenium Browser Automation Project')
  });


});
