package uk.Nhs.Nhsbsa.Services.Test;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks extends Utils

{
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void openBrowser() {
        browserSelector.setUpBrowser();
        driver.get("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");
    }

    @After
    public void closeBrowser(Scenario scenario) {
        if(scenario.isFailed()) {
            Utils.screenShotCucumber(scenario);
        }
        driver.quit();
    }
}
