import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class TimePage {
    constructor(readonly page: Page) {}


//locators 
get timeTab() {
    return this.page.getByRole('link', { name: 'Time' });
}

get tableRows(){
     return this.page.locator('.oxd-table-body .oxd-table-card');
}

get viewButton (){
    return this.page.locator('oxd-button oxd-button--medium oxd-button--text').first();
}

get timeSheetPeriodLocator(){
    return this.page.getByPlaceholder('yyyy-mm-dd');
}

get editButton(){
    return this.page.getByRole("button", {name: 'Edit'});
}

get editTimesheet(){
    return this.page.getByText('Edit Timesheet', {exact: true});
}

get projectNameInput(){
    return this.page.getByPlaceholder('Type for hints...').first();
}


get activityLocator(){
    return this.page.locator('.oxd-select-text .oxd-select-text-input').first();
}
get activityOption(){
    return this.page.getByText('Bug Fixes', {exact:true}).first();
}

get dayLocator(){
    return this.page.locator('td.orangehrm-timesheet-table-body-cell.--duration-input input');
}

get AddRowButton (){
    return this.page.locator('button.oxd-icon-button.orangehrm-timesheet-icon').last();
}

get deleteButton (){
    return this.page.locator('button.oxd-icon-button.orangehrm-timesheet-icon');
}
get saveButton(){
    return this.page.getByRole('button', { name: 'Save' });}

get successfullySavedMessage(){
    return this.page.getByText('Successfully Saved').first();
}

get myTimesheet(){
    return this.page.getByText('My Timesheet', {exact:true}).first();
}

get Statuslocator(){
    return this.page.getByText('Status: Submitted', {exact:true}).first();
}

//functions
async timeSheetPeriodText (time: string){
    await this.timeSheetPeriodLocator.fill(time)
}


async editTimesheetSteps (projectname: string, Mon: string, Tue: string, Wed: string, Thu: string, Fri: string,Sat: string,Sun: string ){
    
    await this.projectNameInput.fill(projectname);
    const searchingIndicator = this.page.getByText('Searching...');
        const firstSuggestion = this.page.locator('.oxd-autocomplete-dropdown')
            .getByText(projectname, { exact: false })
            .first();
    await searchingIndicator.waitFor({ state: 'hidden', timeout: 20000 }).catch(() => {});
    await expect(firstSuggestion).toBeVisible({ timeout: 10000 });
    await firstSuggestion.click();
    await this.activityLocator.click();
    await this.activityOption.waitFor({state:'visible'});
    await this.activityOption.click();

    await this.dayLocator.nth(0).fill(Mon);
    await this.dayLocator.nth(1).fill(Tue);
    await this.dayLocator.nth(2).fill(Wed);
    await this.dayLocator.nth(3).fill(Thu);
    await this.dayLocator.nth(4).fill(Fri);
    await this.dayLocator.nth(5).fill(Sat);
    await this.dayLocator.nth(6).fill(Sun);
    // await this.saveButton.click();


}

}