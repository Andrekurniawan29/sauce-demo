const{By, until} = require('selenium-webdriver');
    
class ProductPage {
    constructor(driver) {
        this.driver = driver;
        
        this.addToCartButton = By.xpath("//input[@id='add']");
    }

    async clickAddToCartButton() {
        let element = await this.driver.wait(until.elementLocated(this.addToCartButton), 10000);
        await element.click();
    }
}
module.exports = ProductPage;