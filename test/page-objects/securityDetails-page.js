let {element, by} = require("protractor");


const securityDetailsPage = function () {

    const marketCap = element(by.xpath("//div[@class='_8AXJn4ourf sc-htpNat jtWIOA sc-bdVaJa gRrvFh'][1]/div[2]"));
    const date = element(by.xpath("//label[text()='Market Cap']/../../../../following-sibling::div[2]")) // !!!!!!!!!!!!!!!!!!!!!!!!!!!!


    this.getMarketCap = function () {
        return marketCap.getText()
    };

    this.getDate = function () {
        return date.getText();
    };

    this.assertMarketCap = function (marketCapOnQuotePage) {
        expect(this.getMarketCap()).toEqual(marketCapOnQuotePage);
    }

};
module.exports = new securityDetailsPage();