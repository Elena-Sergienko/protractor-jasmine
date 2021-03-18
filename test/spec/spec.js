let homePage = require('../page-objects/home-page');
let quotePage = require('../page-objects/quote-page');
let securityDetailsPage = require('../page-objects/securityDetails-page');
let setsCompaniesData = require('../data/sets-companies-data.json');
let {browser} = require("protractor");


describe('Scenario', function () {
    let openOnQuotePage;
    let marketCapOnQuotePage;
    let marketCapOnSecurityPage;
    let dateMarketCapSecur;

    beforeAll(() => {
        homePage.get(browser.params.url);
        homePage.clickAcceptCookiesBtn();
    })

    setsCompaniesData.map(function (data) {

        it(`Test Case for ${data.companyAbbreviation} company`, async function () {
            homePage.setCompany(data.companyAbbreviation);
            homePage.clickQuoteTab();

            // quotePage.checkOpenPresent(data.companyAbbreviation);
            // quotePage.checkMarketCapPresent(data.companyAbbreviation);

            if (await quotePage.checkMarketCapShouldBe()) {
                openOnQuotePage = quotePage.getOpen();
                marketCapOnQuotePage = quotePage.getMarketCap();

                // console.log("Open" + await openOnQuotePage);
                console.log("Market Cap on Quote Page " + await marketCapOnQuotePage);
                quotePage.clickSecurityDetailsTab();
                marketCapOnSecurityPage = securityDetailsPage.getMarketCap();
                securityDetailsPage.assertMarketCap(marketCapOnQuotePage);  // Assert Market Cap on Quote Page matches with Security Detail Page
            } else {
                openOnQuotePage = quotePage.getOpen();
                // console.log(await openOnQuotePage);
                console.log("No Market Cap on Quote Page");
                quotePage.clickSecurityDetailsTab();
                marketCapOnSecurityPage = securityDetailsPage.getMarketCap();
            }

            quotePage.assertCompanyName(data.companyName, data.companyAbbreviation);

            dateMarketCapSecur = securityDetailsPage.getDate();
            console.log(data.companyAbbreviation + ": Market Cap " + await marketCapOnSecurityPage + " on " + await dateMarketCapSecur);
        });

    });
});