import { expect } from '@playwright/test';

export class SystemUserDashboradPage {
    constructor(page) {
        this.page = page;
        this.deativeButton = page.locator('//tbody[@class="MuiTableBody-root css-1xnox0e"]//tr[1]//td[4]');
        this.status = page.locator('//tr[1]//td[@id="active"]');
    }

    async deactivateSystemUser() {
        const statusname = await this.status.textContent();
        console.log(statusname);
        if (statusname.includes('Active')) {
            await this.deativeButton.click();
            const locator = await this.page
                .getByTestId('integration')
                .locator('div')
                .filter({ hasText: 'User was deactivated' })
                .nth(2);
            await expect(locator).toHaveText('User was deactivated');
        } else {
            console.log('User is already deactivated');
        }
    }
}
