const{By, until} = require('selenium-webdriver');
    
class ProductPage {
    constructor(driver) {
        this.driver = driver;
        
        this.addToCartButton = By.xpath("//input[@id='add']");
        this.selectSize = By.id("product-select-option-0");
        this.selectColor = By.id("product-select-option-1");
        this.sizeS = By.xpath("//option[@value='S']");
        this.sizeM = By.xpath("//option[@value='M']");
        this.sizeL = By.xpath("//option[@value='L']");
        this.redColor = By.xpath("//option[@value='Red']");
        this.blueColor = By.xpath("//option[@value='Blue']");
        this.cartButton = By.xpath("//a[@href='/cart' and normalize-space()='Check Out']");
        this.cartCount = By.id("cart-target-desktop");
    }

    async clickAddToCartButton() {
        let cartCountElement = await this.driver.wait(until.elementLocated(this.cartCount), 10000);
        let currentCartCount = Number((await cartCountElement.getText()).replace(/\D/g, ""));
        let element = await this.driver.wait(until.elementLocated(this.addToCartButton), 10000);
        await element.click();
        await this.driver.wait(async () => {
            let countText = await this.driver.findElement(this.cartCount).getText();
            return Number(countText.replace(/\D/g, "")) > currentCartCount;
        }, 10000, "Cart count did not increase after adding the product");
    }

    async clickSelectSize() {
        let element = await this.driver.wait(until.elementLocated(this.selectSize), 10000);
        await element.click();
    }

    async clickSelectColor() {
        let element = await this.driver.wait(until.elementLocated(this.selectColor), 10000);
        await element.click();
    }

    async selectSizeS() {
        let element = await this.driver.wait(until.elementLocated(this.selectSize), 10000);
        await element.click();
        let sizeElement = await this.driver.wait(until.elementLocated(this.sizeS), 10000);
        await sizeElement.click();
    }

    async selectSizeM() {
        let element = await this.driver.wait(until.elementLocated(this.selectSize), 10000);
        await element.click();
        let sizeElement = await this.driver.wait(until.elementLocated(this.sizeM), 10000);
        await sizeElement.click();
    }

    async selectSizeL() {
        let element = await this.driver.wait(until.elementLocated(this.selectSize), 10000);
        await element.click();
        let sizeElement = await this.driver.wait(until.elementLocated(this.sizeL), 10000);
        await sizeElement.click();
    }

    async selectRedColor() {
        let element = await this.driver.wait(until.elementLocated(this.selectColor), 10000);
        await element.click();
        let colorElement = await this.driver.wait(until.elementLocated(this.redColor), 10000);
        await colorElement.click();
    }

    async selectBlueColor() {
        let element = await this.driver.wait(until.elementLocated(this.selectColor), 10000);
        await element.click();
        let colorElement = await this.driver.wait(until.elementLocated(this.blueColor), 10000);
        await colorElement.click();
    }

    async clickCheckout() {
        let element = await this.driver.wait(until.elementLocated(this.cartButton), 10000);
        await element.click();
    }
}
module.exports = ProductPage;