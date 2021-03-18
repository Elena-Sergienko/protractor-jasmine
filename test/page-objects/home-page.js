let {browser, element, by} = require("protractor");

const homePage = function () {
    const acceptCookiesBtn = element(by.css("button._3qoKVL3FNq"));
    const inputFieldQuote = element(by.xpath("//div[@class='_1jocgGqVNR HOcrWAfzU5 sc-htpNat iSNGhk sc-bdVaJa iHZvIS']/input"));
    const dropdownOption = element(by.xpath("//div[@class='Rnxv8ImvYu']"))
    const quoteTab = element(by.xpath("//div/a[text()='Quote']"))


    this.get = function (url) {
        browser.get(url);
    };

    this.clickAcceptCookiesBtn = function () {
        acceptCookiesBtn.click();
    }

    this.setCompany = function (company) {
        inputFieldQuote.sendKeys(company)
        browser.manage().timeouts().implicitlyWait(2000);

        dropdownOption.click();
    };

    this.clickQuoteTab = function () {
        quoteTab.click();
    };

};
module.exports = new homePage();