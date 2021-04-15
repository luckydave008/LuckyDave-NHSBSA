package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import uk.Nhs.Nhsbsa.Services.Test.LoadProp;
import uk.Nhs.Nhsbsa.Services.Test.Utils;

public class PaidUniversalCreditPage extends Utils{
    LoadProp loadProp = new LoadProp ();

    private By _heading    = By.cssSelector ("#question-heading");
    private By _optionYes = By.cssSelector ("label[for='yes-universal']");
    private By _nextBtn = By.cssSelector ("#next-button");

    public void verifyHeading() {
        Assert.assertEquals ( loadProp.getProperty ("paidUniversalCreditPageHeading"), Utils.getTextFromElement (_heading));
    }
    public void selectOptionYes(){
        Utils.waitForElementClickable (_optionYes,5);
        Utils.clickElementBy (_optionYes);
        Utils.clickElementBy (_nextBtn);
    }
}
