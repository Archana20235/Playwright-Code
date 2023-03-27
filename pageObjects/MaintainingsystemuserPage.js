export class Maintain {
    constructor(page) {
        this.page = page;
        this.administration = page.locator('[class="NavigationLinkWrapperadministration"]');
        this.userManagement = page.getByText('User Management');
        this.integrationManagers = page.locator('[text="Integration-Managers"]');
        this.settingIcon = page.locator('[class="anticon anticon-caret-down"]');
        this.integrationManagementTab = page.getByText('Integration Management');
        this.adminbutton = page.locator('[class="sc-ipEyDJ kWNqoz"]');
        // this.SystemUser = page.getByText('System Users');
    }

    async clickonAdministration() {
        await this.administration.click();
        await this.userManagement.click();
    }
    async clickonIntegrationManagement() {
        await this.adminbutton.click();
        await this.settingIcon.click();
        await this.integrationManagementTab.click();
    }
}
