const { By } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.url = null;
    }

    async Higlight(element) {
        const target = await this.driver.findElement(By.css(this[element]));
        await this.driver.executeScript("arguments[0].style.backgroundColor = 'red'", target);

    };

    async Browse(browseItem) {
        await this.driver.get(`${this.url}${browseItem}`)

    };

    async getText(element) {
        const target = await this.driver.findElement(By.css(this[element]));
        return await target.getText();

    };
}

module.exports = BasePage;