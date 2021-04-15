package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import uk.Nhs.Nhsbsa.Services.Test.LoadProp;
import uk.Nhs.Nhsbsa.Services.Test.Utils;

public class LiveWithPartnerPage extends Utils {
    LoadProp loadProp = new LoadProp ();

    private By _heading    = By.cssSelector ("#question-heading");
    private By _optionYes = By.cssSelector ("#label-yes");
    private By _nextBtn = By.cssSelector ("#next-button");
    private By _optionNo = By.cssSelector ("#label-no");

    public void verifyHeading() {
        Assert.assertEquals ( loadProp.getProperty ("liveWithAPartnerPageHeading"), Utils.getTextFromElement (_heading));
    }
    public void selectOptionYes(){
        Utils.waitForElementDisplay (_optionYes,5);
        Utils.clickElementBy (_optionYes);
        Utils.clickElementBy (_nextBtn);
    }
    public void selectOptionNo(){
        Utils.waitForElementDisplay (_optionNo,5);
        Utils.clickElementBy (_optionNo);
        Utils.clickElementBy (_nextBtn);
    }

}
