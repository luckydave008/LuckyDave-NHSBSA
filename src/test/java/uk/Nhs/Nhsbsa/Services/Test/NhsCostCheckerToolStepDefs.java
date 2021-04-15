package uk.Nhs.Nhsbsa.Services.Test;

import PageObjects.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NhsCostCheckerToolStepDefs {

    HomePage homePage = new HomePage ();
    WhereYouLivePage whereYouLivePage = new WhereYouLivePage ();
    EnterDateOfBirthPage enterDateOfBirth = new EnterDateOfBirthPage ();
    FullTimeEducationPage fullTimeEducation = new FullTimeEducationPage ();
    LiveWithPartnerPage liveWithPartnerPage = new LiveWithPartnerPage ();
    ClaimBenefitsTaxCreditsPage claimBenefitsTaxCreditsPage = new ClaimBenefitsTaxCreditsPage ();
    PaidUniversalCreditPage paidUniversalCreditPage = new PaidUniversalCreditPage ();
    UniversalCreditClaimPage universalCreditClaimPage = new UniversalCreditClaimPage ();
    UniversalCreditTakeHomePayPage universalCreditTakeHomePayPage = new UniversalCreditTakeHomePayPage ();
    PregnantOrGivenBirthPage pregnantOrGivenBirthPage = new PregnantOrGivenBirthPage ();
    WarPensionerPage warPensionerPage = new WarPensionerPage ();
    DiabetesPage diabetesPage = new DiabetesPage ();
    GlaucomaPage glaucomaPage = new GlaucomaPage ();
    CareHomePage careHomePage = new CareHomePage ();
    SavingsPage savingsPage = new SavingsPage ();
    ResultPage resultPage = new ResultPage ();

    @Given("^I am on home page$")
    public void i_am_on_home_page() {
        homePage.selectOkWithAnalyticsCookies ();
        homePage.verifyNhsImage ();
        homePage.verifyHeading ();
    }

    @When("^I click start button$")
    public void i_click_start_button() {
        homePage.clickStartBtn ();
    }

    @When("^I select country as Wales$")
    public void i_select_country_a_Wales() {
        whereYouLivePage.verifyHeading ();
        whereYouLivePage.selectOptionWales ();
        whereYouLivePage.clickNextBtn ();
    }

    @When("^I enter my \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" of birth$")
    public void i_enter_my_and_of_birth(String day, String month, String year)  {
        enterDateOfBirth.verifyHeading ();
        enterDateOfBirth.enterDayMonthYear (day, month, year);
    }

    @When("^I select yes for full-time at a school, college, university or are home schooled$")
    public void i_select_yes_for_full_time_at_a_school_college_university_or_are_home_schooled() {
        fullTimeEducation.verifyHeading ();
        fullTimeEducation.selectOptionYes ();
    }
    @When("^I select no for full-time at a school, college, university or are home schooled$")
    public void i_select_no_for_full_time_at_a_school_college_university_or_are_home_schooled()  {
        fullTimeEducation.verifyHeading ();
        fullTimeEducation.selectOptionNo ();
    }

    @When("^I select yes for living with partner$")
    public void i_select_yes_for_living_with_partner()  {
        liveWithPartnerPage.verifyHeading ();
        liveWithPartnerPage.selectOptionYes ();
    }

    @When("^I select yes for me or my partner claim any benefits or tax credits$")
    public void i_select_yes_for_me_or_my_partner_claim_any_benefits_or_tax_credits()  {
        claimBenefitsTaxCreditsPage.verifyHeadingForYouAndYourPartner ();
        claimBenefitsTaxCreditsPage.claimbenefitsTaxCreditYesOption ();
    }

    @When("^I select yes for me or my partner receive Universal Credit Payment$")
    public void i_select_yes_for_me_or_my_partner_receive_Universal_Credit_Payment() {
        paidUniversalCreditPage.verifyHeading ();
        paidUniversalCreditPage.selectOptionYes ();
    }

    @When("^I select yes for responsibility of child or young person living with me, LCW and LCWRA as part of me or my partners universal credit$")
    public void i_select_yes_for_responsibility_of_child_or_young_person_living_with_me_LCW_and_LCWRA_as_part_of_me_or_my_partners_universal_credit() {
        universalCreditClaimPage.verifyHeading ();
        universalCreditClaimPage.selectOptionYes ();
    }

    @When("^I select yes for the take-home pay used in the last Universal Credit period £935 or less$")
    public void i_select_yes_for_the_take_home_pay_used_in_the_last_Universal_Credit_period_£935_or_less() {
        universalCreditTakeHomePayPage.verifyHeading ();
        universalCreditTakeHomePayPage.selectOptionYes ();
    }
    @When("^I select no for living with partner$")
    public void i_select_no_for_living_with_partner()  {
        liveWithPartnerPage.verifyHeading ();
        liveWithPartnerPage.selectOptionNo ();
    }

    @When("^I select no for claim any benefits or tax credits$")
    public void i_select_no_for_claim_any_benefits_or_tax_credits() {
        claimBenefitsTaxCreditsPage.verifyHeadingForYou ();
        claimBenefitsTaxCreditsPage.claimbenefitsTaxCreditNoOption ();
    }

    @When("^I select no for pregnant or given birth in last 12 months$")
    public void i_select_no_for_pregnant_or_given_birth_in_last_12_months()  {
        pregnantOrGivenBirthPage.verifyHeading ();
        pregnantOrGivenBirthPage.selectOptionNo ();
    }

    @When("^I select no for injury or illness caused by serving in armed forces$")
    public void i_select_no_for_injury_or_illness_caused_by_serving_in_armed_forces()  {
        warPensionerPage.verifyHeading ();
        warPensionerPage.selectOptionNo ();
    }

    @When("^I select no for diabetes$")
    public void i_select_no_for_diabetes()  {
        diabetesPage.verifyHeading ();
        diabetesPage.selectOptionNo ();
    }

    @When("^I select no for glaucoma$")
    public void i_select_no_for_glaucoma()  {
        glaucomaPage.verifyHeading ();
        glaucomaPage.selectOptionNo ();
    }

    @When("^I select no for live permanently in a care home$")
    public void i_select_no_for_live_permanently_in_a_care_home()  {
        careHomePage.verifyHeading ();
        careHomePage.selectOptionNo ();
    }

    @When("^I select no for savings, investments and property of more than 16k$")
    public void i_select_no_for_savings_investments_and_property_of_more_than_16k()  {
        savingsPage.verifyHeading ();
        savingsPage.selectOptionNo ();
    }

    @Then("^I should be eligible to get help with NHS costs for \"([^\"]*)\"$")
    public void i_should_be_eligible_to_get_help_with_NHS_costs_for(String ageAndSelection) {
        if (ageAndSelection.equalsIgnoreCase ("under16") || ageAndSelection.equalsIgnoreCase ("age16to18FullTimeEducation") || ageAndSelection.equalsIgnoreCase ("age16to18NotFullTimeEducation")) {
            resultPage.verifyDonePanel ( );
            resultPage.verifyResultReason (ageAndSelection);
            resultPage.verifyGetMoneyOffSection (ageAndSelection);
        }
        resultPage.verifyGetFreeSection (ageAndSelection);

        switch (ageAndSelection) {
            case "under16":
            case "age16to18FullTimeEducation":
                resultPage.verifyPregnantOrHaveChildrenSection (ageAndSelection);
                resultPage.verifyUnder16And19FullTimeEduDontGetHelp ( );
                break;
            case "age16to18NotFullTimeEducation":
                resultPage.verifyWarningUnder19NotFullTimeEdu ();
                break;
            case "over18WithNoPartner":
                resultPage.verifyHeading ();
                resultPage.verifyHowToGetHelpOver18NoPartner ();
                resultPage.verifyFurtherHelpOver18NoPartner ();
                break;
            default:
                throw new Error (ageAndSelection + "is not a valid selection in stepdef");
        }
    }

}
