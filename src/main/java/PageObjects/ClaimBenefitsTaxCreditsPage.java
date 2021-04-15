package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import uk.Nhs.Nhsbsa.Services.Test.LoadProp;
import uk.Nhs.Nhsbsa.Services.Test.Utils;



public class ClaimBenefitsTaxCreditsPage extends Utils {
    LoadProp loadProp = new LoadProp ();

    private By _heading    = By.cssSelector ("#question-heading");
    private By _benefitsTaxCreditsYes = By.cssSelector ("#label-yes");
    private By _nextBtn = By.cssSelector ("#next-button");
    private By _benefitsTaxCreditsNo = By.cssSelector ("#label-no");

    public void verifyHeadingForYouAndYourPartner()  {
        Assert.assertEquals ( loadProp.getProperty ("claimBenefitsTaxCreditPageHeading1"), Utils.getTextFromElement (_heading));
    }
    public void verifyHeadingForYou(){
        Assert.assertEquals (loadProp.getProperty ("claimBenefitsTaxCreditPageHeading"), Utils.getTextFromElement (_heading));
    }
    public void claimbenefitsTaxCreditYesOption(){
        Utils.waitForElementClickable (_benefitsTaxCreditsYes,5);
        Utils.clickElementBy (_benefitsTaxCreditsYes);
        Utils.clickElementBy (_nextBtn);
    }
    public void claimbenefitsTaxCreditNoOption(){
        Utils.waitForElementClickable (_benefitsTaxCreditsNo,5);
        Utils.clickElementBy (_benefitsTaxCreditsNo);
        Utils.clickElementBy (_nextBtn);
    }
}
