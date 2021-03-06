$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("crmLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "CRM application login test",
  "description": "",
  "id": "crm-application-login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "Title of your scenario",
  "description": "",
  "id": "crm-application-login-test;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#  Then title of login page is Free CRM"
    },
    {
      "line": 25,
      "value": "#  Then user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 26,
      "value": "#  Then user clicks on login button"
    }
  ],
  "line": 27,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 36699817118,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 4158181,
  "error_message": "java.lang.NullPointerException\r\n\tat com.crm.stepDefinitions.LoginStepDefinition.close_the_browser(LoginStepDefinition.java:85)\r\n\tat ✽.Then Close the browser(crmLogin.feature:27)\r\n",
  "status": "failed"
});
});