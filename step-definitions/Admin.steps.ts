import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import loginData from '../test-data/login.json';
import type { CustomWorld } from '../support/world';


Then('Click on Admin Tab', async function (this: CustomWorld) {
    await this.AdminPage.adminTab.click();

})

Then('Click on add button and assert the url is displayed', async function (this: CustomWorld) {
  
    await this.AdminPage.addButton.click();
    await expect(this.AdminPage.page).toHaveURL(`${loginData.baseUrl}/admin/saveSystemUser`);

})

When('Create a new Admin details with {string} and {string} and {string} and {string} and save button'
    , async function (this: CustomWorld, 
        EmployeeName: string, 
        username: string, 
        password: string, 
        confirmPassword: string) {

        await this.AdminPage.addUserSteps(EmployeeName,username,password,confirmPassword);

        })
  
       