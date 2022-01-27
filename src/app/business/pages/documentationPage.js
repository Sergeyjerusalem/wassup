const { By } = require('selenium-webdriver');
const BasePage = require('../pages/basePage');
class DocumentationPage extends BasePage {
    constructor(driver) {
        super(driver)
        this.url = 'https://www.selenium.dev/documentation/'
        this.mainTitle = '.td-content h1';
        this.headerItems = '.navbar-collapse .nav-link';
    }

    async Browse(browseItem) {
        await this.driver.get(`${this.url}${browseItem}`)

    };

    async waitTitle() {
        this.driver.wait(async () => {
            const titles = await this.driver.findElements(By.css(this.mainTitle));
            return !!titles.length
        }, 5000)
    };


    async selectHeaderItem(position) {
        const target = (await this.driver.findElements(By.css(this.headerItems)))[position];
        await target.click();
    };
}

module.exports = DocumentationPage;