Feature:TimeSheet 

@Sanity
Scenario Outline:  View and Edit in Time Sheet for Employee Name
    Given User navigates to OrangeHRM login page
    When User login with a valid credentials
    Then Click on Time Tab 
    Then Print all the results 
    When Click on view button of the first record
    Then Click on Edit Button 
    And Fill the data of the first Row with "<Projectname>" and timesheet "<Mon>" and "<Tue>" and "<Wed>" and "<Thu>" and "<Fri>" and "<Sat>" and "<Sun>"
    When User clicks on Add Row to add a new Row
    And User delete the second Row and keep only the first one
    Then User click on Save button
    And Assert successfully saved message is displayed 
    And Verify the status is Submitted and print it
 
Examples:
| Projectname      |Mon|Tue|Wed|Thu|Fri|Sat|Sun |
| Apache Software Foundation | 08| 08|18 |12 |16 | 06| 12 |
