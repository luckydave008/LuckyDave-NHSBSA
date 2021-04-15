package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import uk.Nhs.Nhsbsa.Services.Test.LoadProp;
import uk.Nhs.Nhsbsa.Services.Test.Utils;

public class HomePage extends Utils {
    LoadProp loadProp = new LoadProp ();

    private By _okWithCookies = By.cssSelector (("#nhsuk-cookie-banner__link_accept_analytics"));
    private By _nhsImage = By.cssSelector ("img[alt='NHS Business Service Authority']");
    private By _heading = By.cssSelector ("h1.heading-xlarge");
    private By _startBtn = By.cssSelector ("#next-button");

    public void selectOkWithAnalyticsCookies() {
       Utils.waitForElementClickable (_okWithCookies,10);
       Utils.clickElementBy (_okWithCookies);
    }

    public void verifyNhsImage() {
       Boolean imagePresent =  driver.findElement (_nhsImage).isDisplayed ();

       if (imagePresent == false) {
           throw new Error ("NHS logo not displayed");
       } else {
           System.out.println ("NHS logo is displayed" );
       }
    }

    public void verifyHeading() {
        Assert.assertEquals ( loadProp.getProperty ("homePageHeading"),Utils.getTextFromElement (_heading));
    }

    public void clickStartBtn() {
        Utils.waitForElementClickable (_startBtn,10);
        Utils.clickElementBy (_startBtn);
    }

}
