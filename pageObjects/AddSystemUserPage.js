import { expect } from '@playwright/test';

export class AddSystemUserPage {
    constructor(page) {
        this.page = page;
        this.settingIcon = page.locator('[class="anticon anticon-caret-down"]');
        this.integrationManagementTab = page.locator('//div[@class="setting-div"]//li[2]');
        this.plusIconAdduser = page.locator('img', { name: 'createSystemUserIcon' });
        this.calenderDateSelect = page.locator('//tbody[@class="ant-calendar-tbody"]//tr[5]//td[3]');
    }
    async clickonIntegrationManagement() {
        await this.settingIcon.click();
        await this.integrationManagementTab.click();
    }

    async fillSystemUserDetails() {
        const randomNumber = Math.random();
        await this.page.getByRole('img', { name: 'createSystemUserIcon' }).click();
        await this.page.getByPlaceholder('Enter name').click();
        await this.page.getByPlaceholder('Enter name').fill('Autotest4' + +randomNumber);
        await this.page.getByPlaceholder('Enter password').click();
        await this.page.getByPlaceholder('Enter password').fill('1234567');
        await this.page.getByPlaceholder('startDate').click();
        await this.page.getByTitle('February 2, 2023').getByText('2').click();
        await this.page.getByTestId('createSystemUserModal').locator('div').filter({ hasText: 'Basic' }).nth(2).click();
        await this.page.getByRole('option', { name: 'Basic' }).click();
        await this.page.getByPlaceholder('endDate').click();
        await this.page.getByText('28').click();
        await this.page.getByRole('button', { name: 'Create System User' }).click();
        const locator = this.page.getByText('! New System User Created');
        // TODO: don't use expect() in page model
        await expect(locator).toHaveText('! New System User Created');
    }
}
