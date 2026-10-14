const {Builder, until} = require('selenium-webdriver');
const Loginpage = require('../Pages/LoginPage');
const credentials = require('../Config/credentials');

describe('Login dengan POM', function () {
    this.timeout(60000);
    let driver;
    let loginPage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://sauce-demo.myshopify.com/account/login');
        loginPage = new Loginpage(driver);
    });
    
    afterEach(async function () {
        if(driver) await driver.quit();
    });

    it ('Login dengan akun yang valid', async function () {
        await loginPage.login(credentials.validUser.email, credentials.validUser.password);
        await driver.sleep(5000);
    });
});