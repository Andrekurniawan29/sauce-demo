const {By, until} = require ('selenium-webdriver');

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;

        //input data
        this.emailField = By.xpath("//input[@id='email']");
        this.selectCountry = By.id("SelectSelectPS33_32_2t_19_34_2p_2v_2t-20");
        this.selectIndonesia = By.xpath("//option[@value='Indonesia']");
        this.firstNameField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-21");
        this.lastNameField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-22");
        this.companyField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-23");
        this.addressField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-25");
        this.apartmentField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-26");
        this.cityField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-27");
        this.selectProvince = By.id("SelectSelectPS33_32_2t_19_34_2p_2v_2t-28");
        this.selectJakarta = By.xpath("//option[@value='JK']");
        this.postalCodeField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-29");
        this.phoneField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-31");
        this.saveInformationCheckbox = By.id("save_shipping_information");

        //payment card
        this.cardNumberField = By.xpath("//div[@class = 'current-field' and contains (., 'Card number')])");
        this.expDateField = By.xpath("//div[@class='current-field' and contains(., 'Expiration date (MM / YY)')]");
        this.securityCodeField = By.xpath("//div[@class='current-field' and contains (., 'Security code')])");
        this.nameCardField = By.xpath("//div[@class='current-field' and contains (., 'Name on card')])");
        this.saveCardCheckbox = By.id("billingAddressCheckbox");

        this.payNowButton = By.id("checkout-pay-button");
        this.tncButton = By.id("CommandInvokerPS2t_3c_38_2t_32_37_2x_33_32_37-99");
    }
        async enterEmail(email) {
            let element = await this.driver.wait(until.elementLocated(this.emailField),10000);
            await element.clear();
            await element.sendKeys(email);
        }

        async selectCountryOption() {
            let element = await this.driver.wait(until.elementLocated(this.selectCountry),10000);
            await element.click();
        }

        async selectIndonesiaOption() {
            let element = await this.driver.wait(until.elementLocated(this.selectIndonesia),10000);
            await element.click();
        }

        async enterFirstName(firstName) {
            let element = await this.driver.wait(until.elementLocated(this.firstNameField),10000);
            await element.clear();
            await element.sendKeys(firstName);
        }

        async enterLastName(lastName) {
            let element = await this.driver.wait(until.elementLocated(this.lastNameField),10000);
            await element.clear();
            await element.sendKeys(lastName);
        }

        async enterCompany(company) {
            let element = await this.driver.wait(until.elementLocated(this.companyField),10000);
            await element.clear();
            await element.sendKeys(company);
        }

        async enterAddress(address) {
            let element = await this.driver.wait(until.elementLocated(this.addressField),10000);
            await element.clear();
            await element.sendKeys(address);
        }

        async enterApartment(apartment) {
            let element = await this.driver.wait(until.elementLocated(this.apartmentField),10000);
            await element.clear();
            await element.sendKeys(apartment);
        }

        async enterCity(city) {
            let element = await this.driver.wait(until.elementLocated(this.cityField),10000);
            await element.clear();
            await element.sendKeys(city);
        }

        async selectProvinceOption() {
            let element = await this.driver.wait(until.elementLocated(this.selectProvince),10000);
            await element.click();
        }

        async selectJakartaOption() {
            let element = await this.driver.wait(until.elementLocated(this.selectJakarta),10000);
            await element.click();
        }

        async enterPostalCode(postalCode) {
            let element = await this.driver.wait(until.elementLocated(this.postalCodeField),10000);
            await element.clear();
            await element.sendKeys(postalCode);
        }

        async enterPhone(phone) {
            let element = await this.driver.wait(until.elementLocated(this.phoneField),10000);
            await element.clear();
            await element.sendKeys(phone);
        }

        async clickSaveInformation() {
            let element = await this.driver.wait(until.elementLocated(this.saveCardCheckbox),10000);
            await element.click();
        }

        // aksi payment card

        async enterCardNumber(cardNumber) {
            let element = await this.driver.wait(until.elementLocated(this.cardNumberField),10000);
            await element.clear();
            await element.sendKeys(cardNumber);
        }

        async enterExpDate(expDate) {
            let element = await this.driver.wait(until.elementLocated(this.expDateField),10000);
            await element.clear();
            await element.sendKeys(expDate);
        }

        async enterSecurityCode(securityCode) {
            let element = await this.driver.wait(until.elementLocated(this.securityCodeField),10000);
            await element.clear();
            await element.sendKeys(securityCode);
        }

        async enterNameCard(nameCard) {
            let element = await this.driver.wait(until.elementLocated(this.nameCardField),10000);
            await element.clear();
            await element.sendKeys(nameCard);
        }

        async clickSaveCard() {
            let element = await this.driver.wait(until.elementLocated(this.saveCardCheckbox),10000);
            await element.click();
        }

        async clickPayNowButton() {
            let element = await this.driver.wait(until.elementLocated(this.payNowButton),10000);
            await element.click();
        }

        //isi flow alamat
        async inputData(email, firstName, lastName, company, address, apartment, city, postalCode, phone) {
            await this.enterEmail(email);
            await this.enterFirstName(firstName);
            await this.enterLastName(lastName);
            await this.enterCompany(company);
            await this.enterAddress(address);
            await this.enterApartment(apartment);
            await this.enterCity(city);
            await this.enterPostalCode(postalCode);
            await this.enterPhone(phone);
        }
        //isi flow card
        async inputCard(cardNumber, expDate, securityCode, nameCard,) {
            await this.enterCardNumber(cardNumber);
            await this.enterExpDate(expDate);
            await this.enterSecurityCode(securityCode);
            await this.enterNameCard(nameCard);
        }
}
module.exports = CheckoutPage;