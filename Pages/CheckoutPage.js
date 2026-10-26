const {By, until} = require ('selenium-webdriver');

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;

        //input data
        this.emailField = By.xpath("//input[@id='email']");
        this.emailCheckbox = By.xpath("//input[@id='marketing_opt_in']");
        this.selectCountry = By.id("SelectPS33_32_2t_19_34_2p_2v_2t-20");
        this.selectIndonesia = By.xpath("//option[@value='Indonesia']");
        this.firstNameField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-21");
        this.lastNameField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-22");
        this.companyField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-23");
        this.addressField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-25");
        this.apartmentField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-26");
        this.cityField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-27");
        this.selectProvince = By.id("SelectPS33_32_2t_19_34_2p_2v_2t-28");
        this.selectJakarta = By.xpath("//option[@value='JK']");
        this.postalCodeField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-29");
        this.phoneField = By.id("TextFieldPS33_32_2t_19_34_2p_2v_2t-31");
        this.saveInformationCheckbox = By.id("save_shipping_information");

        //payment card
        this.cardNumberFrame = By.css('iframe[title="Card number"]');
        this.expDateFrame = By.css('iframe[title="Expiration date (MM / YY)"]');
        this.securityCodeFrame = By.css('iframe[title="Security code"]');
        this.nameCardFrame = By.css('iframe[title="Name on card"]');
        this.cardNumberField = By.id("number");
        this.expDateField = By.id("expiry");
        this.securityCodeField = By.id("verification_value");
        this.nameCardField = By.id("name");
        this.saveCardCheckbox = By.id("billingAddressCheckbox");

        this.payNowButton = By.id("checkout-pay-button");
        this.tncButton = By.id("CommandInvokerPS2t_3c_38_2t_32_37_2x_33_32_37-99");
    }
        async enterEmail(email) {
            let element = await this.driver.wait(until.elementLocated(this.emailField),10000);
            await element.clear();
            await element.sendKeys(email);
        }

        async clickEmailCheckbox () {
            let element = await this.driver.wait(until.elementLocated(this.emailCheckbox),10000);
            await element.click();
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
            let element = await this.driver.wait(until.elementLocated(this.saveInformationCheckbox),10000);
            await element.click();
        }

        // aksi payment card
        // frame locator untuk mencari lokasi frame payment card supaya sistem menampilkan field tersebut
        async enterCardField(frameLocator, fieldLocator, value, expectedDigits) {
            await this.driver.switchTo().defaultContent();
            let frame = await this.driver.wait(until.elementLocated(frameLocator), 10000);
            await this.driver.switchTo().frame(frame);
            try {
                let element = await this.driver.wait(until.elementLocated(fieldLocator), 10000);
                await this.driver.wait(until.elementIsVisible(element), 10000);
                await element.clear();
                let inputParts = Array.isArray(value) ? value : [value];
                for (let inputPart of inputParts) {
                    await element.sendKeys(inputPart);
                }
                if (expectedDigits) {
                    await this.driver.wait(async () => {
                        let currentValue = await element.getProperty("value");
                        return currentValue && currentValue.replace(/\D/g, "") === expectedDigits;
                    }, 10000, "Expiration date was not entered correctly in the card field");
                }
                return await element.getProperty("value");
            } finally {
                await this.driver.switchTo().defaultContent();
            }
        }

        async enterCardNumber(cardNumber) {
            await this.enterCardField(this.cardNumberFrame, this.cardNumberField, cardNumber);
            await this.driver.sleep (1500);
        }
        // penambahan input date secarah terpisah
        async enterExpDate(expDate) {
            let match = /^(\d{2})\s*\/?\s*(\d{2})$/.exec(expDate);
            if (!match || Number(match[1]) < 1 || Number(match[1]) > 12) {
                throw new Error("Expiration date must be a valid MM/YY value");
            }
            let expectedValue = `${match[1]}${match[2]}`;
            let actualValue = await this.enterCardField(
                this.expDateFrame,
                this.expDateField,
                [match[1], match[2]],
                expectedValue
            );
            if (!actualValue || actualValue.replace(/\D/g, "") !== expectedValue) {
                throw new Error("Expiration date was not entered correctly in the card field");
            }
        }

        async enterSecurityCode(securityCode) {
            await this.enterCardField(this.securityCodeFrame, this.securityCodeField, securityCode);
        }

        async enterNameCard(nameCard) {
            await this.enterCardField(this.nameCardFrame, this.nameCardField, nameCard);
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