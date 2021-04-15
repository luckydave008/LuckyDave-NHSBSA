$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("nhsCostCheckerTool.feature");
formatter.feature({
  "line": 2,
  "name": "As a person from Wales",
  "description": "       I need to know what help I can get with my NHS costs via cost checker tool\r\n       So that I can get the treatment I need",
  "id": "as-a-person-from-wales",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify costs for person aged under 16",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-under-16",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter my \"\u003cday\u003e\", \"\u003cmonth\u003e\" and \"\u003cyear\u003e\" of birth",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be eligible to get help with NHS costs for \"\u003cageAndSelection\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-under-16;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year",
        "ageAndSelection"
      ],
      "line": 16,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-under-16;;1"
    },
    {
      "cells": [
        "20",
        "04",
        "2005",
        "under16"
      ],
      "line": 17,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-under-16;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11057768724,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_am_on_home_page()"
});
formatter.result({
  "duration": 1164867942,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify costs for person aged under 16",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-under-16;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter my \"20\", \"04\" and \"2005\" of birth",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be eligible to get help with NHS costs for \"under16\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_click_start_button()"
});
formatter.result({
  "duration": 632504033,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_country_a_Wales()"
});
formatter.result({
  "duration": 1156567843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    },
    {
      "val": "04",
      "offset": 18
    },
    {
      "val": "2005",
      "offset": 27
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_enter_my_and_of_birth(String,String,String)"
});
formatter.result({
  "duration": 979838282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "under16",
      "offset": 53
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_should_be_eligible_to_get_help_with_NHS_costs_for(String)"
});
formatter.result({
  "duration": 399166050,
  "status": "passed"
});
formatter.after({
  "duration": 1426450807,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify costs for person aged 16,17,18 and in full time education",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-in-full-time-education",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter my \"\u003cday\u003e\", \"\u003cmonth\u003e\" and \"\u003cyear\u003e\" of birth",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select yes for full-time at a school, college, university or are home schooled",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be eligible to get help with NHS costs for \"\u003cageAndSelection\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-in-full-time-education;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year",
        "ageAndSelection"
      ],
      "line": 27,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-in-full-time-education;;1"
    },
    {
      "cells": [
        "20",
        "04",
        "2004",
        "age16to18FullTimeEducation"
      ],
      "line": 28,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-in-full-time-education;;2"
    },
    {
      "cells": [
        "20",
        "04",
        "2003",
        "age16to18FullTimeEducation"
      ],
      "line": 29,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-in-full-time-education;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10792978498,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_am_on_home_page()"
});
formatter.result({
  "duration": 793701762,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify costs for person aged 16,17,18 and in full time education",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-in-full-time-education;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter my \"20\", \"04\" and \"2004\" of birth",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select yes for full-time at a school, college, university or are home schooled",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be eligible to get help with NHS costs for \"age16to18FullTimeEducation\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_click_start_button()"
});
formatter.result({
  "duration": 766862647,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_country_a_Wales()"
});
formatter.result({
  "duration": 1237493694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    },
    {
      "val": "04",
      "offset": 18
    },
    {
      "val": "2004",
      "offset": 27
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_enter_my_and_of_birth(String,String,String)"
});
formatter.result({
  "duration": 1331447352,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_yes_for_full_time_at_a_school_college_university_or_are_home_schooled()"
});
formatter.result({
  "duration": 1008311421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "age16to18FullTimeEducation",
      "offset": 53
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_should_be_eligible_to_get_help_with_NHS_costs_for(String)"
});
formatter.result({
  "duration": 395336419,
  "status": "passed"
});
formatter.after({
  "duration": 1886097029,
  "status": "passed"
});
formatter.before({
  "duration": 10696581502,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_am_on_home_page()"
});
formatter.result({
  "duration": 724152034,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify costs for person aged 16,17,18 and in full time education",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-in-full-time-education;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter my \"20\", \"04\" and \"2003\" of birth",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select yes for full-time at a school, college, university or are home schooled",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be eligible to get help with NHS costs for \"age16to18FullTimeEducation\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_click_start_button()"
});
formatter.result({
  "duration": 727629316,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_country_a_Wales()"
});
formatter.result({
  "duration": 941529751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    },
    {
      "val": "04",
      "offset": 18
    },
    {
      "val": "2003",
      "offset": 27
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_enter_my_and_of_birth(String,String,String)"
});
formatter.result({
  "duration": 884819882,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_yes_for_full_time_at_a_school_college_university_or_are_home_schooled()"
});
formatter.result({
  "duration": 1123239281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "age16to18FullTimeEducation",
      "offset": 53
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_should_be_eligible_to_get_help_with_NHS_costs_for(String)"
});
formatter.result({
  "duration": 442214972,
  "status": "passed"
});
formatter.after({
  "duration": 1657838650,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify costs for person aged 16,17,18 and not in full time education and living with partner other options as yes",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-not-in-full-time-education-and-living-with-partner-other-options-as-yes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter my \"\u003cday\u003e\", \"\u003cmonth\u003e\" and \"\u003cyear\u003e\" of birth",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select no for full-time at a school, college, university or are home schooled",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select yes for living with partner",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select yes for me or my partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select yes for me or my partner receive Universal Credit Payment",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select yes for responsibility of child or young person living with me, LCW and LCWRA as part of me or my partners universal credit",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select yes for the take-home pay used in the last Universal Credit period £935 or less",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should be eligible to get help with NHS costs for \"\u003cageAndSelection\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-not-in-full-time-education-and-living-with-partner-other-options-as-yes;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year",
        "ageAndSelection"
      ],
      "line": 44,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-not-in-full-time-education-and-living-with-partner-other-options-as-yes;;1"
    },
    {
      "cells": [
        "20",
        "04",
        "2004",
        "age16to18NotFullTimeEducation"
      ],
      "line": 45,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-not-in-full-time-education-and-living-with-partner-other-options-as-yes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9299108352,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_am_on_home_page()"
});
formatter.result({
  "duration": 702267525,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify costs for person aged 16,17,18 and not in full time education and living with partner other options as yes",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-16,17,18-and-not-in-full-time-education-and-living-with-partner-other-options-as-yes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter my \"20\", \"04\" and \"2004\" of birth",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select no for full-time at a school, college, university or are home schooled",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select yes for living with partner",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select yes for me or my partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select yes for me or my partner receive Universal Credit Payment",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select yes for responsibility of child or young person living with me, LCW and LCWRA as part of me or my partners universal credit",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select yes for the take-home pay used in the last Universal Credit period £935 or less",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should be eligible to get help with NHS costs for \"age16to18NotFullTimeEducation\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_click_start_button()"
});
formatter.result({
  "duration": 668113346,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_country_a_Wales()"
});
formatter.result({
  "duration": 1196244100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    },
    {
      "val": "04",
      "offset": 18
    },
    {
      "val": "2004",
      "offset": 27
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_enter_my_and_of_birth(String,String,String)"
});
formatter.result({
  "duration": 1225110799,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_full_time_at_a_school_college_university_or_are_home_schooled()"
});
formatter.result({
  "duration": 962159756,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_yes_for_living_with_partner()"
});
formatter.result({
  "duration": 1090145314,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_yes_for_me_or_my_partner_claim_any_benefits_or_tax_credits()"
});
formatter.result({
  "duration": 1041193888,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_yes_for_me_or_my_partner_receive_Universal_Credit_Payment()"
});
formatter.result({
  "duration": 1033342149,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_yes_for_responsibility_of_child_or_young_person_living_with_me_LCW_and_LCWRA_as_part_of_me_or_my_partners_universal_credit()"
});
formatter.result({
  "duration": 1247958149,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_yes_for_the_take_home_pay_used_in_the_last_Universal_Credit_period_£935_or_less()"
});
formatter.result({
  "duration": 991422733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "age16to18NotFullTimeEducation",
      "offset": 53
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_should_be_eligible_to_get_help_with_NHS_costs_for(String)"
});
formatter.result({
  "duration": 336572245,
  "status": "passed"
});
formatter.after({
  "duration": 2050968594,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Verify costs for person aged over 18 and not living with partner other options as no",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-over-18-and-not-living-with-partner-other-options-as-no",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter my \"\u003cday\u003e\", \"\u003cmonth\u003e\" and \"\u003cyear\u003e\" of birth",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I select no for living with partner",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select no for claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select no for pregnant or given birth in last 12 months",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select no for injury or illness caused by serving in armed forces",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select no for diabetes",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select no for glaucoma",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select no for live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select no for savings, investments and property of more than 16k",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I should be eligible to get help with NHS costs for \"\u003cageAndSelection\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-over-18-and-not-living-with-partner-other-options-as-no;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year",
        "ageAndSelection"
      ],
      "line": 62,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-over-18-and-not-living-with-partner-other-options-as-no;;1"
    },
    {
      "cells": [
        "20",
        "04",
        "2001",
        "over18WithNoPartner"
      ],
      "line": 63,
      "id": "as-a-person-from-wales;verify-costs-for-person-aged-over-18-and-not-living-with-partner-other-options-as-no;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8695727354,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_am_on_home_page()"
});
formatter.result({
  "duration": 444864373,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Verify costs for person aged over 18 and not living with partner other options as no",
  "description": "",
  "id": "as-a-person-from-wales;verify-costs-for-person-aged-over-18-and-not-living-with-partner-other-options-as-no;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I click start button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I select country as Wales",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter my \"20\", \"04\" and \"2001\" of birth",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I select no for living with partner",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select no for claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select no for pregnant or given birth in last 12 months",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select no for injury or illness caused by serving in armed forces",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select no for diabetes",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select no for glaucoma",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select no for live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select no for savings, investments and property of more than 16k",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I should be eligible to get help with NHS costs for \"over18WithNoPartner\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_click_start_button()"
});
formatter.result({
  "duration": 409018653,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_country_a_Wales()"
});
formatter.result({
  "duration": 761397634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    },
    {
      "val": "04",
      "offset": 18
    },
    {
      "val": "2001",
      "offset": 27
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_enter_my_and_of_birth(String,String,String)"
});
formatter.result({
  "duration": 784836005,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_living_with_partner()"
});
formatter.result({
  "duration": 1312242589,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_claim_any_benefits_or_tax_credits()"
});
formatter.result({
  "duration": 968683170,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_pregnant_or_given_birth_in_last_12_months()"
});
formatter.result({
  "duration": 925054097,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_injury_or_illness_caused_by_serving_in_armed_forces()"
});
formatter.result({
  "duration": 941201860,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_diabetes()"
});
formatter.result({
  "duration": 975434388,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_glaucoma()"
});
formatter.result({
  "duration": 1174981409,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_live_permanently_in_a_care_home()"
});
formatter.result({
  "duration": 1046215070,
  "status": "passed"
});
formatter.match({
  "location": "NhsCostCheckerToolStepDefs.i_select_no_for_savings_investments_and_property_of_more_than_16k()"
});
formatter.result({
  "duration": 1099814949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "over18WithNoPartner",
      "offset": 53
    }
  ],
  "location": "NhsCostCheckerToolStepDefs.i_should_be_eligible_to_get_help_with_NHS_costs_for(String)"
});
formatter.result({
  "duration": 505720443,
  "status": "passed"
});
formatter.after({
  "duration": 1684354402,
  "status": "passed"
});
});