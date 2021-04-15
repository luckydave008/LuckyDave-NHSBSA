package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import uk.Nhs.Nhsbsa.Services.Test.LoadProp;
import uk.Nhs.Nhsbsa.Services.Test.Utils;


public class EnterDateOfBirthPage extends Utils {
        LoadProp loadProp = new LoadProp ();

        private By _heading    = By.cssSelector ("#question-heading");
        private By _enterDay   = By.cssSelector ("#dob-day");
        private By _enterMonth = By.cssSelector ("#dob-month");
        private By _enterYear  = By.cssSelector ("#dob-year");
        private By _nextBtn    = By.cssSelector ("#next-button");

        public void verifyHeading(){
            Assert.assertEquals ( loadProp.getProperty ("dateOfBirthPageHeading"),Utils.getTextFromElement (_heading));
        }
         public void enterDayMonthYear(String day, String month, String year){
             Utils.waitForElementDisplay (_enterDay,10);
             Utils.enterText (_enterDay, day);
             Utils.waitForElementDisplay (_enterMonth,10);
             Utils.enterText (_enterMonth, month);
             Utils.waitForElementDisplay (_enterYear,10);
             Utils.enterText (_enterYear, year);
             Utils.clickElementBy (_nextBtn);

         }


}
