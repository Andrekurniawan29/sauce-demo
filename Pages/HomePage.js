const {By, until} = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;

        this.greyJacket = By.id("product-1");
        this.noirJacket = By.id("product-2");
        this.stripedTop = By.id("product-3");
    }

    async clickGreyJacket() {
        let element = await this.driver.wait(until.elementLocated(this.greyJacket), 10000);
        await element.click();
    }

    async clickNoirJacket() {
        let element = await this.driver.wait(until.elementLocated(this.noirJacket), 10000);
        await element.click();
    }

    async clickStripedTop() {
        let element = await this.driver.wait(until.elementLocated(this.stripedTop), 10000);
        await element.click();
    }

}

module.exports = HomePage;