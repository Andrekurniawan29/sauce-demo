const { By, until} = require ('selenium-webdriver');

class SignupPage {
    constructor(driver) {
        this.driver = driver;

        this.firstNameInput = By.xpath("//input[@id='first_name']");
        this.lastNameInput = By.xpath("//input[@id='last_name']");
        this.emailInput = By.xpath("//input[@id='email']");
        this.passwordInput = By.xpath("//input[@id='password']");
        this.createButton = By.xpath("//input[@value='Create']");
    }
    async enterFirstName (firstName) {
        let element = await this.driver.wait(until.elementLocated(this.firstNameInput),10000);
            await element.clear();
            await element.sendKeys(firstName)
    }

    async enterLastName (lastName) {
        let element = await this.driver.wait(until.elementLocated(this.lastNameInput),10000);
            await element.clear();
            await element.sendKeys(lastName);
    }

    async enterEmail (email) {
        let element = await this.driver.wait(until.elementLocated(this.emailInput),10000);
            await element.clear();
            await element.sendKeys(email);
    }

    async enterPassword (password) {
        let element = await this.driver.wait(until.elementLocated(this.passwordInput),10000);
            await element.clear();
            await element.sendKeys(password);
    }

    async clickCreate() {
        let button = await this.driver.wait(until.elementLocated(this.createButton), 10000);
        await button.click();
    }

    async signup(firstName, lastName, email, password) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
    }
}
module.exports = SignupPage;