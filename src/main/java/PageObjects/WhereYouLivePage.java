package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import uk.Nhs.Nhsbsa.Services.Test.LoadProp;
import uk.Nhs.Nhsbsa.Services.Test.Utils;

public class WhereYouLivePage extends Utils {
    LoadProp loadProp = new LoadProp ();

    private By _heading = By.cssSelector ("#question-heading");
    private By _optionWales = By.cssSelector ("#label-wales");
    private By _nextBtn = By.cssSelector ("#next-button");

    public void verifyHeading() {
        Assert.assertEquals ( loadProp.getProperty ("whereYouLivePageHeading"),Utils.getTextFromElement (_heading));
    }

    public void selectOptionWales() {
        Utils.waitForElementDisplay (_optionWales,10);
        Utils.clickElementBy (_optionWales);
    }

    public void clickNextBtn() {
        Utils.waitForElementClickable (_nextBtn, 10);
        Utils.clickElementBy (_nextBtn);
    }
}
