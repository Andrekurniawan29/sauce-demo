const {By, until} = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;

        this.emailInput = By.xpath("//input[@id='customer_email']");
        this.passwordInput = By.xpath("//input[@id='customer_password']");
        this.loginButton = By.xpath("//input[@value='login']");
    }

    async enterEmail(email) {
        let element = await this.driver.wait(until.elementLocated(this.emailInput), 10000);
        await element.clear();
        await element.sendKeys(email);
    }

    async enterPassword(password) {
        let element = await this.driver.wait(until.elementLocated(this.passwordInput), 10000);
        await element.clear();
        await element.sendKeys(password);
    }

    async clickLoginButton() {
        let element = await this.driver.wait(until.elementLocated(this.loginButton), 10000);
        await element.click();
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
module.exports = LoginPage;