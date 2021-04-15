@test
Feature: As a person from Wales
         I need to know what help I can get with my NHS costs via cost checker tool
         So that I can get the treatment I need

  Background:
    Given I am on home page

    Scenario Outline: Verify costs for person aged under 16
      When I click start button
      And I select country as Wales
      And I enter my "<day>", "<month>" and "<year>" of birth
      Then I should be eligible to get help with NHS costs for "<ageAndSelection>"

      Examples:
        | day | month |  year |ageAndSelection|
        | 20  |  04   |  2005 | under16       |

    Scenario Outline: Verify costs for person aged 16,17,18 and in full time education
      When I click start button
      And I select country as Wales
      And I enter my "<day>", "<month>" and "<year>" of birth
      And I select yes for full-time at a school, college, university or are home schooled
      Then I should be eligible to get help with NHS costs for "<ageAndSelection>"

      Examples:
        | day | month |  year |       ageAndSelection       |
        | 20  |  04   |  2004 |  age16to18FullTimeEducation |
        | 20  |  04   |  2003 |  age16to18FullTimeEducation |

    Scenario Outline: Verify costs for person aged 16,17,18 and not in full time education and living with partner other options as yes
      When I click start button
      And I select country as Wales
      And I enter my "<day>", "<month>" and "<year>" of birth
      And I select no for full-time at a school, college, university or are home schooled
      And I select yes for living with partner
      And I select yes for me or my partner claim any benefits or tax credits
      And I select yes for me or my partner receive Universal Credit Payment
      And I select yes for responsibility of child or young person living with me, LCW and LCWRA as part of me or my partners universal credit
      And I select yes for the take-home pay used in the last Universal Credit period £935 or less
      Then I should be eligible to get help with NHS costs for "<ageAndSelection>"

      Examples:
        | day | month |  year |        ageAndSelection         |
        | 20  |  04   |  2004 | age16to18NotFullTimeEducation  |

   Scenario Outline: Verify costs for person aged over 18 and not living with partner other options as no
     When I click start button
     And I select country as Wales
     And I enter my "<day>", "<month>" and "<year>" of birth
     And I select no for living with partner
     And I select no for claim any benefits or tax credits
     And I select no for pregnant or given birth in last 12 months
     And I select no for injury or illness caused by serving in armed forces
     And I select no for diabetes
     And I select no for glaucoma
     And I select no for live permanently in a care home
     And I select no for savings, investments and property of more than 16k
     Then I should be eligible to get help with NHS costs for "<ageAndSelection>"

    Examples:
      | day | month |  year |        ageAndSelection         |
      | 20  |  04   |  2001 |       over18WithNoPartner      |