import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import loginData from '../test-data/login.json';
import type { CustomWorld } from '../support/world';

Then('Click on Time Tab', async function (this: CustomWorld) {
    await this.TimePage.timeTab.click();
});

Then('Print all the results', async function(this: CustomWorld){

const rows = this.TimePage.tableRows;
await rows.first().waitFor({state: 'visible'});

const count = await rows.count();
for (let i = 0; i < count; i++)
{
    const cells = await rows.nth(i).locator('[role="cell"]').allInnerTexts();
    console.log(`Row ${i + 1}: ${cells.join(' | ')}`);
}
})


When('Click on view button of the first record', async function(this: CustomWorld){
    await this.TimePage.tableRows.first().getByText('View', {exact: true}).click();  
})


Then('Click on Edit Button', async function(this: CustomWorld){
    await this.TimePage.editButton.first().click();
    await this.TimePage.editTimesheet.waitFor({state: 'visible'});
    await this.TimePage.deleteButton.first().click();


})

Then(
  'Fill the data of the first Row with {string} and timesheet {string} and {string} and {string} and {string} and {string} and {string} and {string}',
  async function (
    this: CustomWorld,
    projectname: string,
    mon: string, tue: string, wed: string, thu: string, fri: string, sat: string, sun: string
  ) {
    await this.TimePage.editTimesheetSteps(projectname, mon, tue, wed, thu, fri, sat, sun);
  }
);

When('User clicks on Add Row to add a new Row', async function(this: CustomWorld){
   
    await this.TimePage.AddRowButton.click();

})

Then('User delete the second Row and keep only the first one', async function(this: CustomWorld){
    await this.TimePage.deleteButton.nth(1).click();

})

Then('User click on Save button', async function(this: CustomWorld){
    await this.TimePage.saveButton.click();
        await expect(this.LeavePage.successfullySavedMessage).toBeVisible();

})


Then('Assert successfully saved message is displayed and status is Submitted', async function(this: CustomWorld){
    await this.TimePage.saveButton.click();
    await expect(this.TimePage.successfullySavedMessage).toBeVisible();
    await this.TimePage.myTimesheet.waitFor({state: 'visible'});
})

Then('Verify the status is Submitted and print it', async function(this: CustomWorld){
    
    await expect(this.TimePage.Statuslocator).toBeVisible();
    console.log(await this.TimePage.Statuslocator.innerText());

})