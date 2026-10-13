const { Builder, By, until } = require ('selenium-webdriver');
const assert = require('assert');
const SignupPage = require ('../Pages/SignupPage');

describe('registrasi dengan POM', function (){
    this.timeout(60000);
    let driver;
    let signupPage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://sauce-demo.myshopify.com/account/register');
        signupPage = new SignupPage(driver);
    });
    
    afterEach(async function () {
        if(driver) await driver.quit();
    });

    it('Register Baru', async function() {
        await signupPage.signup('testing', 'testing', 'testing@email.com', 'testing123');
        await driver.sleep(5000)

        //  let  header = await driver.wait(
        // until.elementLocated(By.xpath("//header[@id='account']/div[1]/div[2]/nav/a[3]")),10000
        // );

        // let headerText = await header.getText();
        // console.log('Header Ditemukan:', headerText);
    });

    it('Register tanpa nama depan', async function() {
        await signupPage.signup(' ', 'testing', 'testing@email.com', 'testing123');
        await driver.sleep(3000)
    })

    it('Register tanpa nama belakang', async function() {
        await signupPage.signup('testing', ' ', 'testing@email.com', 'testing123');
        await driver.sleep(3000)
    })

    it('Register tanpa nama depan dan belakang', async function() {
        await signupPage.signup(' ', ' ', 'testing@email.com', 'testing123');
        await driver.sleep(3000)
    })

    it('Register tanpa email', async function() {
        await signupPage.signup('testing', 'testing', ' ', 'testing123');
        await driver.sleep(3000)
    })

    it('Register tanpa password', async function() {
        await signupPage.signup('testing', 'testing', 'testing@email.com', '');
        await driver.sleep(3000)
    })
    it('Register tanpa email dan password', async function() {
        await signupPage.signup('testing', 'testing', ' ', '');
        await driver.sleep(3000)
    })

    it('Register hanya nama depan', async function() {
        await signupPage.signup('testing', ' ', ' ', '');
        await driver.sleep(3000)
    })

    it('Register hanya nama belakang', async function() {
        await signupPage.signup(' ', 'testing', ' ', '');
        await driver.sleep(3000)
    })

    it('Register hanya email', async function() {
        await signupPage.signup(' ', ' ', 'testing@email.com', ' ');
        await driver.sleep(3000)
    })

    it('Register hanya password', async function() {
        await signupPage.signup(' ', ' ', ' ', 'testing123');
        await driver.sleep(3000)
    })
    
    it('Register hanya nama depan dan email', async function() {
        await signupPage.signup('testing', ' ', 'testing@email.com', ' ');
        await driver.sleep(3000)
    });
    
    it('Register hanya nama belakang dan email', async function() {
        await signupPage.signup(' ', 'testing', 'testing@email.com', ' ');
        await driver.sleep(3000)
    })

    it('Register hanya nama depan dan password', async function() {
        await signupPage.signup('testing', ' ', ' ', 'testing123');
        await driver.sleep(3000)
    })

    it('Register hanya nama belakang dan password', async function() {
        await signupPage.signup(' ', 'testing', ' ', 'testing123');
        await driver.sleep(3000)
    })
    
});
