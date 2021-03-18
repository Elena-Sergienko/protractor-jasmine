let {element, by} = require("protractor");


const quotePage = function () {

    const open = element(by.xpath("//div[@class='_2AJ8TxkVSp sc-htpNat jtWIOA sc-bdVaJa iHZvIS']/div[1]/p"));
    const marketCap = element(by.xpath("//div[@class='_2AJ8TxkVSp sc-htpNat jtWIOA sc-bdVaJa iHZvIS']/div[11]/p"));
    const companyAbbreviation = element(by.xpath("//h1[1]"));
    const companyName = element(by.xpath("//h1[2]"));
    const securityDetailsTab = element(by.xpath("//div/a[text()='Security Details']"));
    const logoQX = element(by.xpath("//img[@src='/logos/tier/QX.png']"));
    const logoPink = element(by.xpath("//img[@src='/logos/tier/PS.png']"));

    this.checkOpenPresent = function (company) {
        open.isPresent().then(present => {
            if (present) {
                open.getText().then(function (text) {
                    console.log(`${company}. Open: ${text}`);
                })
            } else {
                console.log(`${company}. Element Open not present`)
            }
        }, err => {
            console.log('error occured', err)
        })
    }

    this.checkMarketCapPresent = function (company) {
        marketCap.isPresent().then(present => {
            if (present) {
                marketCap.getText().then(function (text) {
                    console.log(`${company}. Market Cap: ${text}`);
                    return text;
                })
            } else {
                console.log(`${company}. Element Market Cap not present`)
            }
        }, err => {
            console.log('error occured', err)
        })
    }

    this.checkMarketCapShouldBe = async function () {
        if (await logoQX.isPresent()) {
            return true;
        } else if (await logoPink.isPresent()) {
            return false;
        }
    }

    this.verifyMarketCapNotPresent = function () {
        expect(marketCap.isPresent()).toEqual(false);
    }

    this.getOpen = function () {
        return open.getText()
    };

    this.getMarketCap = function () {
        return marketCap.getText()
    };

    this.getCompanyName = function () {
        return companyName.getText();
    }

    this.getCompanyAbbreviation = function () {
        return companyAbbreviation.getText();
    }

    this.assertCompanyName = function (companyName, companyAbbreviation) {
        expect(this.getCompanyName()).toEqual(companyName);
        expect(this.getCompanyAbbreviation()).toEqual(companyAbbreviation);
    }

    this.clickSecurityDetailsTab = function () {
        securityDetailsTab.click();
    }

};
module.exports = new quotePage();