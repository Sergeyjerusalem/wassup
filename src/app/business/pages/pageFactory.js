const DocumentationPage = require('./documentationPage');
const DH = require('../../../../spec/support/browserDriverHolder/broweserDriverHolder');
const dh = new DH();
class PageFactory {
    constructor(driver) {
        this.driver = driver;
    }

    getPage(page) {
        if (page === 'documentation') {
            return new DocumentationPage(this.driver);
        } else {
            console.log('Wrong type of page');
        }
    }
}

module.exports = PageFactory;