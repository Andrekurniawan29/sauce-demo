const {By, until} = require('selenium-webdriver');

class CartPage {
    constructor(driver) {
        this.driver = driver;

        this.checkoutButton = By.name("checkout");
        this.updateButton = By.xpath("//input[@id='update']");
        this.noteField = By.xpath("//textarea[@id='note']");
    }

    async clickCheckoutButton() {
        let element = await this.driver.wait(until.elementLocated(this.checkoutButton), 10000);
        await element.click();
    }
    async clickUpdateButton() {
        let element = await this.driver.wait(until.elementLocated(this.updateButton), 10000);
        await element.click();
    }
    async enterNote(note) {
        let element = await this.driver.wait(until.elementLocated(this.noteField), 10000);
        await element.sendKeys(note);
    }
}
module.exports = CartPage;