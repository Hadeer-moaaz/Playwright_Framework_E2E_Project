Feature: Admin Management

@Sanity2
Scenario Outline: 
    Given User navigates to OrangeHRM login page
    When User login with a valid credentials
    Then Click on Admin Tab 
    And Click on add button and assert the url is displayed
    When Create a new Admin details with "<EmployeeName>" and "<username>" and "<password>" and "<confirmPassword>" and save button 

Examples:
    | EmployeeName |username | password | confirmPassword |
    | A     | Mark      | V@34fs       | V@34fs               |