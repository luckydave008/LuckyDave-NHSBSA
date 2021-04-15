package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import uk.Nhs.Nhsbsa.Services.Test.LoadProp;
import uk.Nhs.Nhsbsa.Services.Test.Utils;

public class ResultPage extends Utils {
    LoadProp loadProp = new LoadProp ();

    /** common locator on the page **/
    private By _donePanel = By.cssSelector ("div.done-panel");
    private By _resultReason = By.cssSelector ("p.lede");

    /** Under 16 and under 19 in full time education **/
    private By _under16And19FullTimeEduGetFreeSection = By.cssSelector ("div.column-two-thirds > ul:nth-child(5)");
    private By _under16And19FullTimeEduGetMoneyOffSection = By.cssSelector ("div.column-two-thirds > ul:nth-child(7)");
    private By _under16And19FullTimeEduPregnantSection = By.cssSelector ("div.column-two-thirds > ul:nth-child(11)");
    private By _under16And19FullTimeEduDontGetHelpSection = By.cssSelector ("div.column-two-thirds > ul:nth-child(15)");

    /*** Under 19 (16, 17, 18 years old) NOT in full time education and living with partner  **/
    private By _under19NotInFullTimeEduGetFreeSection = By.cssSelector ("div.column-two-thirds > ul:nth-child(4)");
    private By _under19NotInFullTimeEduGetMoneyOffSection = By.cssSelector ("div.column-two-thirds > ul:nth-child(6)");
    private By _warningUnder19NotFullTimeEdu = By.cssSelector ("div.notice strong");

    /** Over 18 with no partner and all options as yes selected **/
    private By _over18NoPartnerHeading = By.cssSelector ("#result-heading");
    // Get free Section
    private By _prescriptionTick = By.cssSelector ("#prescription-tick");
    private By _walesPrescriptionRestriction = By.cssSelector ("#wales-prescription-restriction");
    private By _dentalExamTick = By.cssSelector ("#dental-exam-tick");
    private By _dentalExamRestriction = By.cssSelector ("#wales-lt-twenty-five-dental-exam-restriction");
    // Other sections
    private By _over18NoPartnerPregnantSection = By.cssSelector ("div.column-two-thirds > ul:nth-child(11)");
    private By _over18NoPartnerHowToGetHelpSection = By.cssSelector ("#wales-prescription-how");
    private By _over18NoPartnerFurtherHelpSection = By.cssSelector ("#lis-advert");

    /** Common methods on the page **/
    // Done Panel
    public void verifyDonePanel() {
        Assert.assertEquals ( loadProp.getProperty("resultPageDonePanel"), Utils.getTextFromElement (_donePanel).replaceAll ("[\n]", " "));
    }

    // Result Reason
    public void verifyResultReason(String ageAndSelection) {
        if (ageAndSelection.equalsIgnoreCase ("under16") ) {
            Assert.assertEquals ((loadProp.getProperty ("under16Reason")), Utils.getTextFromElement (_resultReason));
        } else if ( ageAndSelection.equalsIgnoreCase("age16to18FullTimeEducation")) {
            Assert.assertEquals ((loadProp.getProperty ("under19AndFullTimeEduReason")), Utils.getTextFromElement (_resultReason));
        } else if (ageAndSelection.equalsIgnoreCase("age16to18NotFullTimeEducation")) {
            Assert.assertEquals ((loadProp.getProperty ("under19NotFullTimeEduReason")), Utils.getTextFromElement (_resultReason));
        } else {
            throw new Error (ageAndSelection + " is not a valid reason in verifyResultReason");
        }
    }

    // Get free Section
    public void verifyGetFreeSection(String ageAndSelection) {
        switch (ageAndSelection) {
            case "under16":
            case "age16to18FullTimeEducation":
                Assert.assertEquals (loadProp.getProperty ("getFreeSectionUnder19FullTimeEdu"), Utils.getTextFromElement (_under16And19FullTimeEduGetFreeSection).replaceAll ("[\n]", " "));
                break;
            case "age16to18NotFullTimeEducation":
                Assert.assertEquals (loadProp.getProperty ("getFreeSectionUnder19NotFullTimeEdu"), Utils.getTextFromElement (_under19NotInFullTimeEduGetFreeSection).replaceAll ("[\n]", " "));
                break;
            case "over18WithNoPartner":
                Assert.assertEquals (loadProp.getProperty ("prescriptionTick"), Utils.getTextFromElement (_prescriptionTick).replaceAll ("[\n]", " "));
                Assert.assertEquals (loadProp.getProperty ("walesPrescriptionRestriction"), Utils.getTextFromElement (_walesPrescriptionRestriction).replaceAll ("[\n]", " "));
                Assert.assertEquals (loadProp.getProperty ("dentalExamTick"), Utils.getTextFromElement (_dentalExamTick).replaceAll ("[\n]", " "));
                Assert.assertEquals (loadProp.getProperty ("dentalExamRestriction"), Utils.getTextFromElement (_dentalExamRestriction).replaceAll ("[\n]", " "));
                break;
                default:
                    throw new Error (ageAndSelection + " is not a valid reason in verifyGetFreeSection");

        }
    }

    // Money Off Section
    public void verifyGetMoneyOffSection(String ageAndSelection) {
        if (ageAndSelection.equalsIgnoreCase( "under16") || ageAndSelection.equalsIgnoreCase("age16to18FullTimeEducation")) {
            Assert.assertEquals ( loadProp.getProperty("getMoneyOffSectionUnder19FullTimeEdu"), Utils.getTextFromElement (_under16And19FullTimeEduGetMoneyOffSection).replaceAll ("[\n]", " "));
        } else if ( ageAndSelection.equalsIgnoreCase("age16to18NotFullTimeEducation")) {
            Assert.assertEquals (loadProp.getProperty ("getMoneyOffSectionUnder19NotFullTimeEdu"), Utils.getTextFromElement (_under19NotInFullTimeEduGetMoneyOffSection).replaceAll ("[\n]", " "));
        }  else {
            throw new Error (ageAndSelection + " is not a valid reason verifyGetMoneyOffSection");
        }
    }

    public void verifyPregnantOrHaveChildrenSection(String ageAndSelection) {
        if ( ageAndSelection.equalsIgnoreCase ("under16")|| ageAndSelection.equalsIgnoreCase ("age16to18FullTimeEducation")) {
            Assert.assertEquals (loadProp.getProperty ("pregnantOrChildrenSectionUnder19FullTimeEdu"), Utils.getTextFromElement (_under16And19FullTimeEduPregnantSection).replaceAll ("[\n]", " "));
        } else if (ageAndSelection.equalsIgnoreCase ("over18WithNoPartner")) {
            Assert.assertEquals (loadProp.getProperty ("pregnantOrChildrenSectionOver18NoPartner"), Utils.getTextFromElement (_over18NoPartnerPregnantSection).replaceAll ("[\n]", " "));
        } else {
            throw new Error (ageAndSelection + " is not a valid reason in verifyPregnantOrHaveChildrenSection");
        }
    }

    // Under 16 Result Page Methods
    public void verifyUnder16And19FullTimeEduDontGetHelp() {
    Assert.assertEquals ( loadProp.getProperty("dontGetHelpUnder16And19FullTimeEdu"), Utils.getTextFromElement (_under16And19FullTimeEduDontGetHelpSection).replaceAll ("[\n]", " "));
    }

    // Under 19 (16, 17, 18) and NOT in full time education and living with partner Result Page Methods
    public void verifyWarningUnder19NotFullTimeEdu() {
        Assert.assertEquals (loadProp.getProperty ("warningUnder19NotFullTimeEdu"), Utils.getTextFromElement (_warningUnder19NotFullTimeEdu));
    }

    // Over 18 with no partner and all options as no Page Methods
    public void verifyHeading() {
        Assert.assertEquals ( loadProp.getProperty("over18NoPartnerHeading"), Utils.getTextFromElement (_over18NoPartnerHeading).replaceAll ("[\n]", " "));
    }

    public void verifyHowToGetHelpOver18NoPartner() {
        Assert.assertEquals ( loadProp.getProperty("howToGetHelpSectionOver18NoPartner"), Utils.getTextFromElement (_over18NoPartnerHowToGetHelpSection).replaceAll ("[\n]", " "));
    }

    public void verifyFurtherHelpOver18NoPartner() {
        Assert.assertEquals ( loadProp.getProperty("furtherHelpSectionOver18NoPartner"), Utils.getTextFromElement (_over18NoPartnerFurtherHelpSection).replaceAll ("[\n]", " "));
    }
}
