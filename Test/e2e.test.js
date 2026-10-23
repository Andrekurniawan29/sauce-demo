const {Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');
const LoginPage = require('../Pages/LoginPage');
const HomePage = require('../Pages/homePage');
const ProductPage = require('../Pages/ProductPage');
const credentials = require('../Config/credentials');
const CartPage = require('../Pages/CartPage');
const CheckoutPage = require('../Pages/CheckoutPage');

describe('End to end Test dengan POM', function () {
    this.timeout(60000);
    let driver;
    let homePage;
    let loginPage;
    let productPage;
    let cartPage;
    let checkoutPage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://sauce-demo.myshopify.com');
        homePage = new HomePage(driver);
        productPage = new ProductPage(driver);
        loginPage = new LoginPage(driver);
        cartPage = new CartPage(driver);
        checkoutPage = new CheckoutPage(driver);
    })

    afterEach(async function () {
        if (driver) await driver.quit();
    });

    it('Masukan Grey Jacket ke keranjang', async function () {
        await homePage.clickGreyJacket();
        await driver.sleep(3000);
        await productPage.clickAddToCartButton();
        await driver.sleep(3000);
    })

    it('Masukan Noir Jacket ke keranjang', async function () {
        await homePage.clickNoirJacket();
        await driver.sleep(3000);
        await productPage.clickAddToCartButton();
        await driver.sleep(3000);
    })

    it('Masukan Striped Top ke Keranjang', async function () {
        await homePage.clickStripedTop();
        await driver.sleep(3000);
        await productPage.clickAddToCartButton();
        await driver.sleep(3000);
    })

    it('Masukan 3 item ke keranjang', async function () {
        await homePage.clickGreyJacket();
        await driver.sleep(3000);
        await productPage.clickAddToCartButton();
        await driver.sleep(3000);
        await homePage.clickNoirJacket();
        await driver.sleep(3000);
        await productPage.clickAddToCartButton();
        await driver.sleep(3000);
        await homePage.clickStripedTop();
        await driver.sleep(3000);
        await productPage.clickAddToCartButton();
        await driver.sleep(3000);
    })

    it('Belanja Noir Jacket dengan ukuran S warna merah', async function () {
        await homePage.clickNoirJacket();
        await driver.sleep(1000);
        await productPage.clickSelectSize();
        await driver.sleep(1000);
        await productPage.selectSizeS();
        await driver.sleep(1000);
        await productPage.clickSelectColor();
        await driver.sleep(1000);
        await productPage.selectRedColor();
        await driver.sleep(1000);
        await productPage.clickAddToCartButton();
        await driver.sleep(1000);
    })

    it('Belanja Noir Jacket dengan ukuran M warna biru', async function () {
        await homePage.clickNoirJacket();
        await driver.sleep(1000);
        await productPage.clickSelectSize();
        await driver.sleep(1000);
        await productPage.selectSizeM();
        await driver.sleep(1000);
        await productPage.clickSelectColor();
        await driver.sleep(1000);
        await productPage.selectBlueColor();
        await driver.sleep(1000);
        await productPage.clickAddToCartButton();
        await driver.sleep(1000);
    })

    it('Belanja Noir Jacket dengan ukuran L warna merah', async function () {
        await homePage.clickNoirJacket();
        await driver.sleep(1000);
        await productPage.clickSelectSize();
        await driver.sleep(1000);
        await productPage.selectSizeL();
        await driver.sleep(1000);
        await productPage.selectRedColor();
        await driver.sleep(1000);
        await productPage.clickAddToCartButton();
        await driver.sleep(1000);
    })

    it('checkout dengan 3 barang', async function () {
        await homePage.clickGreyJacket();
        await driver.sleep(1000);
        await productPage.clickAddToCartButton();
        await driver.sleep(1000);
        await homePage.clickNoirJacket();
        await driver.sleep(1000);
        await productPage.clickAddToCartButton();
        await driver.sleep(1000);
        await homePage.clickStripedTop();
        await driver.sleep(1000);
        await productPage.clickAddToCartButton();
        await driver.sleep(3000);
        await productPage.clickCheckout();
        await driver.sleep(3000);
        await cartPage.clickCheckoutButton();
        await driver.sleep(3000);
        //sudah masuk ke halaman checkout
        await checkoutPage.inputData('test@example.com','jono', 'triono', 'PT Mencari Cinta Sejati', 'di daerah kebayoran', 'kalibata city', 'Jakarta', '15530', '081212345678');
        await driver.sleep(3000);
        await checkoutPage.clickPayNowButton();
        await driver.sleep(3000);
    })
    
})