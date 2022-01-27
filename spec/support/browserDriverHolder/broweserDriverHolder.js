const { Builder, By, Key, until } = require('selenium-webdriver');


class DriverHolder {
    constructor() {
        this._driver = null;
    }
    async getDriver() {
        if (!this.driver) {
            this._driver = await new Builder()
                .forBrowser('chrome')
                //.usingServer('http://localhost:4444/wd/hub')
                .build();
        }
        return this._driver;

    };

    async clear() {
        await this._driver.executeScript('window.sessionStorage.clear();');
        await this._driver.navigate().refresh();
    }

}

module.exports = DriverHolder;