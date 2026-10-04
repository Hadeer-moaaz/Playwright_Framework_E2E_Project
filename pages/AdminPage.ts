import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class AdminPage {

constructor(readonly page: Page) {}


get adminTab(){
    return this.page.getByRole('link', { name: 'Admin' });

}

get addButton(){
    return this.page.getByRole('button', { name: 'Add' });
}


get userRoleDropdown(){
    return this.page.locator('.oxd-select-text-input').first();

}

get adminRoleOption(){
    return this.page.getByRole('option', { name: 'ESS' });

}

get statusDropdown(){
    return this.page.locator('.oxd-select-text-input').last();
}

get enabledStatusOption(){
    return this.page.getByRole('option', { name: 'Enabled' });
}

get employeeNameInput(){
    return this.page.getByPlaceholder('Type for hints...').first();
}

get usernameInput(){
    return this.page.locator('input.oxd-input.oxd-input--active').first();
}

get passwordInput(){
    return this.page.locator('input.oxd-input.oxd-input--active').nth(1);
}

get confirmPasswordInput(){
    return this.page.locator('input.oxd-input.oxd-input--active').nth(2);
}

get saveButton(){
    return this.page.getByRole('button', { name: 'Save' }); 
}


async addUserSteps(EmployeeName: string, username: string, password: string, confirmPassword: string) {
    await this.userRoleDropdown.click();
    await this.adminRoleOption.waitFor({ state: 'visible' });
    await this.adminRoleOption.click();
    await this.statusDropdown.click();
    await this.enabledStatusOption.waitFor({ state: 'visible' });
    await this.enabledStatusOption.click();
    await this.employeeNameInput.fill(EmployeeName);

    const searchingIndicator = this.page.getByText('Searching...');
    const firstSuggestion = this.page.locator('.oxd-autocomplete-dropdown')
        .getByText(EmployeeName, { exact: false })
        .first();
    await searchingIndicator.waitFor({ state: 'hidden', timeout: 20000 }).catch(() => {});
    await expect(firstSuggestion).toBeVisible({ timeout: 10000 });
    await firstSuggestion.click();


    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);


    await this.saveButton.click();

}
}